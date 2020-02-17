const { google } = require('googleapis');
const router = require("express").Router();
const openurl = require("openurl");

var event;
var baseurl;
router.route("/")
    .post(function (req, res) {
        baseurl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
        console.log("calendar router origin url = " + baseurl);
        const oAuth2Client = getOauthClient(baseurl);
        console.log("ROUTES - Calendar");
        const scopes = ['https://www.googleapis.com/auth/calendar'];
        const url = oAuth2Client.generateAuthUrl({
            access_type: "offline",
            scope: scopes
        });
        event = req.body;
        console.log(req.body);
        openurl.open(url);
        // addEvent(oAuth2Client, event);
    });

router.route("/oauthcallback")
    .get(function (req, res) {
        // const baseurl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
        // console.log("calendar router origin url = " + baseurl);
        // console.log("call back");
        // console.log(req.body);
        // const event = req.body;
        // var event = {
        //     'summary': 'NBA 2019 DEN-UTA',
        //     'location': '800 Howard St., San Francisco, CA 94103',
        //     'description': 'Score:', 
        //     'id': "111",
        //     'start': {
        //         'dateTime': '2020-02-26T09:00:00Z', // start time
        //     },
        //     'attendees': [
        //         { 'email': 'accountEmail@example.com' }, //account Email
        //         { 'email': 'sbrin@example.com' },
        //     ],
        //     'reminders': {
        //         'useDefault': false,
        //         'overrides': [
        //             { 'method': 'email', 'minutes': 24 * 60 },
        //             { 'method': 'popup', 'minutes': 10 },
        //         ],
        //     },
        // };
        console.log("REDIRECT TO HERE");
        const oAuth2Client = getOauthClient(baseurl);
        const code = req.query.code;
        oAuth2Client.getToken(code, function (err, tokens) {
            if (err) { res.status(422).json(err); }
            oAuth2Client.setCredentials(tokens);
            console.log("TOKEN " + tokens);
            console.log(event);
            addEvent(oAuth2Client, event);
        })
    })

function addEvent(auth, event) {
    const calendar = google.calendar({ version: 'v3', auth });
    console.log("add Event");
    console.log(event);
    calendar.events.insert({
        auth: auth,
        calendarId: 'primary',
        resource: event,
    }, function (err, event) {
        if (err) {
            console.log('There was an error contacting the Calendar service: ' + err);
            return;
        }
        console.log('Event created: %s', event.htmlLink);
    });
}

function getOauthClient(baseurl) {
    return new google.auth.OAuth2(
        "401663726835-79gkgrqip3n4jdcuqkh3ckscvouthrl7.apps.googleusercontent.com",
        "P-4PhH5HIBy1nvybB90KcBCK",
        /*`${baseurl}/oauthcallback`*/
        "http://localhost:3001/api/calendar/oauthcallback"
    );
}

module.exports = router;
