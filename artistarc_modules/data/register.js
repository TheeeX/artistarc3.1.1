// if our user.js file is at app/models/user.js
var User = require('./schemas/user');
var userData = {};
exports.addUser = function (userData) {

    var nameT = capitalize(userData.username);

    // create a new user
    var rajan = new User();

        rajan.name = userData.fname;         //'artistarc',
        rajan.username = nameT;                    //'@artistarc',
        rajan.password = userData.password;  //'password',
        rajan.email = userData.email;
        rajan.meta.dob = userData.dob;


    // call the custom method. this will just add '@' to his name
    // user will be @name

    rajan.artify(function (err, name) {
        if (err) throw err;
        console.log('Your new name is ' + name);
    });

    var teststr = '';

    function capitalize(teststr) {
        return teststr.charAt(0).toLowerCase() + teststr.slice(1);
        //"hello world".capitalize();  =>  "Hello world" 
    }

    // call the built-in save method to save to the database

    rajan.save(function (err) {
        if (err) throw err;

        console.log(' ### User saved successfully !OK');
    });

}