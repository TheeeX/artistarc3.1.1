

var http = require('http');
var path = require('path');
var express = require('express');   // The ExpressJS framework
var morgan  = require('morgan');    // For clearing logging messages

console.log(' #loaded - register.js!');
var register = require('./artistarc_modules/data/register');
/**
 * Setup the Express engine
**/
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

// Stuff to do for all routes
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

var testdata = ['Farzana', 'farzana', 'wazxdws', 'mail@mail.com'];

app.get('/addartist', function (req, res) {
    register.addUser(testdata);
    console.log('  ---- Done!!');
});

var userName = 'Atul';
app.get('/register-dr', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
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
