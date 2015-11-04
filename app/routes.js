
console.log(' #loaded - register.js!');
var register = require('../artistarc_modules/data/register');

module.exports = function(app){
        

    app.get('/home', function (req, res) {
        sess = req.session;
        //Session set when user Request our app via URL
        if (sess.email) {
            /*
            * This line check Session existence.
            * If it existed will do some action.
            */
            res.redirect('/');
        }
        else {
            res.redirect('/register');
            //res.render('test', { Tname: userName });
        }
        /* update this line to also pass var */
        //res.render('login');
        //res.redirect('/');
    });

    app.put('/addartist2', function (req, res) {
        req.on('data', function (data) {
            console.log('PUT value ' + data);
        });
        res.json({ "hello": "world" });
        console.log('put - success!OK');
    });
    var sess;
    app.post('/addartist2', function (req, res) {
        console.log('post !');
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
        console.log('  -- POST END!');
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

    app.get('/login', function (req, res) {
        sess = req.session;
        console.log(req.session);
        res.render('login');
    });

    app.get('/register', function (req, res) {
        res.render('register');
    });

    app.get('/', function (req, res) {
        /* update this line to also pass var */
        res.render('home', { Tname: userName });
    });

    app.get('/admin', function (req, res) {
        sess = req.session;
        if (sess.email) {
            res.write('<h1>Hello ' + sess.email + '</h1>');
            res.end('<a href="+">Logout</a>');
        }
        else {
            res.write('<h1>Please login first.</h1>');
            res.end('<a href="+">Login</a>');
        }
    });

}