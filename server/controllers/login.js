module.exports = (function () {
    var mongoose = require('mongoose');

    return {
        login: function (req, res) {
            if (!!req.body.userName && req.body.userName.length > 0) {
                req.session.name = req.body.userName;
                req.session.userType = "user";
                req.session.serverId = 42;

                res.json({
                    sessionId: req.sessionID,
                    serverId: 42,
                    userType: "user",
                    userName: req.session.name
                })
            } else {
                res.sendStatus(400);
            }
        },
        logout: function (req, res) {
            req.session = null;
            res.sendStatus(200);
        }
    }
})();
