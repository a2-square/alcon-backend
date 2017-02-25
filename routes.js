var path = require('path');
var handler = require("./lib");

module.exports = function(app, router) {
    app.route('/').get(function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });

    app.use('/api/', router);
    console.log("roter", config)
    /////////////////////Route to check loggedIn and to verify JWT///////////////////////////////////////

    router.use(function(req, res, next) {
        // Authenticate requested REST api 
        console.log("Let us verify you", "Requested : ", req.headers['origin'], "Needed : ", config.host);
        if (req.headers['origin'] == config.host) {
            return next();
        } else {
            // if authentication failed
            return res.send({
                authentication: false,
                message: 'Opss! something went wrong we apologies for inconvience'
            });

        }
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////  

    router.post('/sendQuery', handler.sendmail);

}
