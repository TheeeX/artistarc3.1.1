

var http = require('http');
var path = require('path');
var express = require('express');   // The ExpressJS framework
var morgan  = require('morgan');    // For clearing logging messages
var multer = require('multer'); // v1.0.5
var bodyParser = require('body-parser');

console.log(' #loaded - register.js!');
var register = require('./artistarc_modules/data/register');

var upload = multer(); // for parsing multipart/form-data
/**
 * Setup the Express engine
**/
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(bodyParser.json());

// Stuff to do for all routes
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

var testdata = ['test user', 'test100', 'wazxdws', 'mail@mail.com'];

app.get('/addartist-dr', function (req, res) {
    register.addUser(testdata);
    console.log('  ---- Done!!');
});
app.put('/addartist2', function (req, res) {
    /* add statement to increment userbytwo by two here */
    //res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
    req.on('data', function (data) {
        console.log('PUT value ' + data);
    });
    res.json({ "hello": "world" });
    console.log('put - success!OK');
});
app.post('/addartist2', function (req, res) {
    var store = '';

    req.on('data', function (data) {
        store += data;
    });
    req.on('end', function () {
        console.log(store);
        var car = JSON.parse(store);
        console.log(car.input_fname);
        res.setHeader("Content-Type", "text/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(store);
    });
    console.log('  ---- Done!!');
});

var userName = 'Atul';
app.get('/register-dr', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/ha', function(req, res) {
   res.json({ message: "Hey Im Back" })
});

app.get('/test', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('signup'); /* update this line to also pass userbytwo */
});

app.get('/register', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('register'); /* update this line to also pass userbytwo */
});

app.get('/', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

var server = http.createServer(app);
server.listen(app.get('port'), function(){
   console.log('Express server listening on port ' + app.get('port'));
});
