function checkAuthenticated(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }

    res.status(401).json({error: "unauthenticated"});
}

function checkNotAuthenticated(req, res, next){
    if (req.isAuthenticated()){
        return res.redirect("/");
    }

    next();
}

module.exports = {
    checkAuthenticated: checkAuthenticated,
    checkNotAuthenticated: checkNotAuthenticated
}