var nodemailer = require('nodemailer');




exports.sendmail = function(req, res) {

    console.log("sendmail  ", req.body)

/*    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'acrepair@gmail.com',
            pass: 'yourpass'
        }
    });

    // setup email data with unicode symbols
    var mailOptions = {
        from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
        to: 'acrepair@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?', // plain text body
        html: '<b>Hello world ?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });*/
};
