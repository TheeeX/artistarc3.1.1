/**
 *
 *
 *
**/

var http = require('http');
var path = require('path');
var express = require('express');
var morgan  = require('morgan');
var multer = require('multer'); // v1.0.5
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var passportlocal = require('passport-local');




/**
 * Setup the Express engine
 * Stuff to do for all routes
**/
var app = express();
var upload = multer();                         // for parsing multipart/form-data
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(morgan('dev'));                        // middleware - logs evrything to the console
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
    secret: process.env.SESSION_SECRET || 'ssshhhhh',
    name: 'cookie_name',
    //store: sessionStore, // connect-mongo session store
    //proxy: true,
    resave: true,
    saveUninitialized: true
}));

//app.use('/dub', function (req, res) {
//    res.send('yo ma!');
//    console.log(req.cookies);
//    console.log('=====================');
//    console.log(req.session);
//})

require('./app/routes.js')(app);

app.use(function(req, res) {
    res.status(404).end('404 Error! Page Not Found');
});

var server = http.createServer(app);
server.listen(app.get('port'), function(){
   console.log('Express server listening on port ' + app.get('port'));
});
