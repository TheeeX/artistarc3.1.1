
console.log(' #loaded - register.js!');
var register = require('../artistarc_modules/data/register');

module.exports = function(app){
  
    var sess;      

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

    app.post('/register', function(req, res){

        console.log('Name : ' + req.body.input_fname );
        console.log('UserName : ' + req.body.input_username );
        console.log('Password : ' + req.body.input_password );
        console.log('Email : ' + req.body.input_email );
        console.log('DOB : ' + req.body.input_dob );

        var artist_meta = {};
        artist_meta.fname = req.body.input_fname ;
        artist_meta.username = req.body.input_username ;
        artist_meta.password = req.body.input_password ;
        artist_meta.email = req.body.input_email ;
        artist_meta.dob = req.body.input_dob ;
        register.addUser(artist_meta);
        res.redirect('/');
    })

    app.put('/addartist2', function (req, res) {
        req.on('data', function (data) {
            console.log('PUT value ' + data);
        });
        res.json({ "hello": "world" });
        console.log('put - success!OK');
    });

    var userName = 'Atul';
    app.get('/register-dr', function (req, res) {
        res.render('test');
    });

    app.get('/ha', function (req, res) {
        res.json({ message: "Hey Im Back" });
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
/*------------------- ROUTES ------------------------*/

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


}