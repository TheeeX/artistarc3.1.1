/*jslint node:true*/
/*eslint no-unused-params:0*/
/* These lines are hints to the code editor */

/**
 * Load the appropriate modules for our web application
*/
var http = require('http');
var path = require('path');
var express = require('express');   // The ExpressJS framework
var morgan  = require('morgan');    // For clearing logging messages

var artistarc = require('./artistarc_modules/test');
var testmongo = require('./artistarc_modules/testmongo');

/**
 * Setup the Express engine
**/
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

// Stuff to do for all routes
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * This is our home route.  This gets called when we visit our
 * base address http://artistarc301.azurewebsites.net/
**/
var userCount = 0;
var userName = 'Atul';
/* add var definition for your new variable, userbytwo here */

app.get('/test', function (req, res) {
    /* add statement to increment userbytwo by two here */
    var url = req.url;
    var testVar = testmongo.testFun();
    console.log(testVar);

    res.render('index',{userCount: testVar});
    //res.write(testVar);
    //res.end('yo');
});

app.get('/dum', function(req, res){
  userCount = userCount + 1;
  /* add statement to increment userbytwo by two here */
  res.render('index', {userCount: userCount}); /* update this line to also pass userbytwo */
});

app.get('/', function(req, res){
  userCount = userCount + 1;
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: artistarc.testFun()}); /* update this line to also pass userbytwo */
});

app.get('/home', function(req, res){
  /* add statement to increment userbytwo by two here */
  var testVar = artistarc.testFun();
  res.render('test',{userName: testVar}); /* update this line to also pass userbytwo */
});

app.get('/login', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/register', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});


app.get('/settings', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/account', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/store', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/developers', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/buisnesses', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/privacy', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/ui', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/about', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/contact', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/management', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});
app.get('/privacypolicy', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/terms', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/help', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/feedback', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

app.get('/faq', function(req, res){
  /* add statement to increment userbytwo by two here */
  res.render('test', {userName: userName}); /* update this line to also pass userbytwo */
});

/**
 * This is where the server is created and run.  Everything previous to this
 * was configuration for this server.
**/

var server = http.createServer(app);
server.listen(app.get('port'), function(){
   console.log('Express server listening on port ' + app.get('port'));
});

/*
app.listen(8080);
console.log('Express server listening on port 8080');
*/