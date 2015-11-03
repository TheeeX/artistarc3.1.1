// if our user.js file is at app/models/user.js
var User = require('./schemas/user');
  
exports.addUser = function (userData) {
   
        // create a new user called rajan
        var rajan = new User({
          name: userData[0],     //'artistarc',
          username: userData[1], //'@artistarc',
          password: userData[2]  //'password',
        });

        // call the custom method. this will just add -dude to his name
        // user will now be Chris-dude
        rajan.artify(function(err, name) {
          if (err) throw err;

          console.log('Your new name is ' + name);
        });

        // call the built-in save method to save to the database
        rajan.save(function(err) {
          if (err) throw err;

          console.log('User saved successfully!');
        });
 
}