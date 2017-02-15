var path = require('path');
var handler = require("./lib")

module.exports = function(app, router) {
    app.route('/').get(function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });

    app.use('/api/', router);

    /////////////////////Route to check loggedIn and to verify JWT///////////////////////////////////////

    router.use(function(req, res, next) {
        // check header or url parameters or post parameters for token
        var token = req.body.access_token || req.query.access_token || req.headers['access_token'] || "http://acrentalservice.com/";
        // decode token
        if (token) {
                    return next();
        } else {
            // if there is no token
            return res.send({
                authentication: false,
                message: 'Auth failed'
            });

        }
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////  

    app.post('/sendmail', handler.sendmail);

}
