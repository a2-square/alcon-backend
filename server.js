var express = require("express");
var app = express();                     //instantiates Express
var http = require("http");
var server = require("http").createServer(app);
var bodyParser = require("body-parser");   //bodyParser is in fact the composition of three middlewares like json, urlencoded and multipart
var chalk = require('chalk');
var morgan = require('morgan');
//var cors = require('cors');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, X-Requested-With, access_token');

    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
};

//configure middleware components.
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(allowCrossDomain);

//create app routes
var router = express.Router();
require("./routes")(app, router);

//listening server 
server.listen(7000, function() {
    console.log(chalk.bgBlue("Alcon server is running  at http://" + server.address().address + ":" + server.address().port + ' in ') + chalk.bgGreen(process.env.NODE_ENV + ' Mode.'));
});



