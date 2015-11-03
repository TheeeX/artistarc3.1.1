/**
 *
 *
 *
**/

var http = require('http');
var path = require('path');
var express = require('express');   // The ExpressJS framework
var morgan  = require('morgan');    // For clearing logging messages
var multer = require('multer'); // v1.0.5
var bodyParser = require('body-parser');
var session = require('express-session');

console.log(' #loaded - register.js!');
var register = require('./artistarc_modules/data/register');

/**
 * Setup the Express engine
 * Stuff to do for all routes
**/
var app = express();
var upload = multer(); // for parsing multipart/form-data
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(session({secret: 'ssshhhhh'}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


app.put('/addartist2', function (req, res) {
    req.on('data', function (data) {
        console.log('PUT value ' + data);
    });
    res.json({ "hello": "world" });
    console.log('put - success!OK');
});
var sess;
app.post('/addartist2', function (req, res) {
    var store = '';
    req.on('data', function (data) {
        store += data;
    });
    req.on('end', function () {
        console.log(store);
        var car = JSON.parse(store);
        console.log(car.input_fname);
        register.addUser(car);
        console.log('  ---- Done!!');
        res.setHeader("Content-Type", "text/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(store);
    });
    console.log('  ---- Done!!');
});

var userName = 'Atul';
app.get('/register-dr', function (req, res) {
    res.render('test', { userName: userName });
});

app.get('/ha', function (req, res) {
    res.json({ message: "Hey Im Back" });
});

app.get('/test', function (req, res) {
    res.render('test-POST-4');
});

app.get('/register', function (req, res) {
    /* update this line to also pass var */
    sess = req.session;
    console.log(req.session);
    res.render('register');
});

app.get('/', function (req, res) {
    res.render('test', { Tname: userName });
});

var server = http.createServer(app);
server.listen(app.get('port'), function(){
   console.log('Express server listening on port ' + app.get('port'));
});
