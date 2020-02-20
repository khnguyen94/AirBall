const { google } = require('googleapis');
const router = require("express").Router();
const open = require("open");

let event;
const oAuth2Client = new google.auth.OAuth2(
    "401663726835-79gkgrqip3n4jdcuqkh3ckscvouthrl7.apps.googleusercontent.com",
    "<clientsecret>",
    "http://localhost:3001/api/calendar/oauthcallback"
);

router.route("/")
    .post(function (req, res) {
        const scopes = ['https://www.googleapis.com/auth/calendar'];
        const url = oAuth2Client.generateAuthUrl({
            access_type: "offline",
            scope: scopes
        });
        event = req.body;
        open(url);
    });

router.route("/oauthcallback")
    .get(function (req, res) {
        const code = req.query.code;
        oAuth2Client.getToken(code, function (err, tokens) {
            if (err) { res.status(422).json(err); }
            oAuth2Client.setCredentials(tokens);
            addEvent(oAuth2Client, event, res);
        })
    })

function addEvent(auth, event, res) {
    const calendar = google.calendar({ version: 'v3', auth });
    calendar.events.insert({
        auth: auth,
        calendarId: 'primary',
        resource: event,
    }, function (err, googleevent) {
        if (err) {
            console.log('There was an error contacting the Calendar service: ' + err);
            res.status(400).json(err);
        }
        console.log('Event created: %s', googleevent.data.htmlLink);
        res.redirect(googleevent.data.htmlLink);
    });
}

module.exports = router;
