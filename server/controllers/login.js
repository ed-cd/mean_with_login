module.exports = (function () {
    var mongoose = require('mongoose');

    return {
        login: function (req, res) {
            if (!!req.body.userName && req.body.userName.length > 0) {
                req.session.userData = {}
                req.session.userData.name = req.body.userName;
                req.session.userData.userType = "user";
                req.session.userData.serverId = 42;

                res.json({
                    sessionId: req.sessionID,
                    serverId: 42,
                    userType: "user",
                    userName: req.session.userData.name
                })
            } else {
                res.sendStatus(400);
            }
        },
        logout: function (req, res) {
            req.session.destroy();
            res.sendStatus(200);
        },
        check: function (req, res) {
            if (!!req.session.userData) {
                (function _checkLoginSuccess() {
                    res.json({
                        sessionId: req.sessionID,
                        serverId: 42,
                        userType: "user",
                        userName: req.session.userData.name
                    })
                }(req.session.userData))

            } else {
                (function _checkLoginFailiure() {
                    res.sendStatus(400);
                }())
            }
        }
    }
})();
