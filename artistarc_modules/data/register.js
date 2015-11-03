// if our user.js file is at app/models/user.js
var User = require('./schemas/user');

exports.addUser = function (userData) {

    var nameT = capitalize(userData.input_username);

    // create a new user called rajan
    var rajan = new User({
        name: userData.input_fname,     //'artistarc',
        username: nameT, //'@artistarc',
        password: userData.input_password,  //'password',
        email: userData.input_email,
        meta: {
            dob: userData.input_dob
        }
    });

    // call the custom method. this will just add -dude to his name
    // user will now be Chris-dude
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

        console.log('User saved successfully!');
    });

}