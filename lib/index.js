var nodemailer = require('nodemailer');
var smtpTransport = require("nodemailer-smtp-transport")

exports.sendmail = function(req, res) {
    var reqData = "Name : " + req.body.name + " Email : " + req.body.email + " Contact : " + req.body.contact + " Message : " + req.body.message;
    console.log("sendmail  ", reqData);
    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: config.id,
            pass: config.code
        },
        tls: { rejectUnauthorized: false }
    }));

    // setup email data with unicode symbols
    var mailOptions = {
        from: '"AC Rental Service" <alconengineers1@gmail.com>', // sender address
        to: 'alconengineers1@gmail.com', // list of receivers
        subject: 'AC Rental Service Customer ' + req.body.subject, // Subject line
        text: reqData, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log("error>>>>>", error)
            var response = {
                message: "Oops! something went wrong, please try after sometime",
                authentication: false
            }
            return res.send(response)

        } else {
            console.log('Message %s sent: %s', info.messageId, info.response, "infooooo>>>>", info);
            var response = {
                message: "Thank You! We will contact you soon",
                authentication: true
            }
            return res.send(response)
        }
transporter.close();
        
    });
};
