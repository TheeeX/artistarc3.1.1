//
 console.log(' #loaded - user.js!');
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://karanjeet96:wazxdws123@ds052408.mongolab.com:52408/artistarc_alpha');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
   console.log('yay!');
});
// create a schema
var userSchema = new Schema({
  name: String,
  mobile: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: String,
  admin: Boolean,       //{ type: Date, default: Date.now },
  location: String,
  meta: {
    age: Number,
    dob: Date,
    website: String
  },
  created_at: { type: Date, default: Date.now },
  updated_at: Date
});

// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users 
userSchema.methods.artify = function() {
  // add some stuff to the users name
  this.username = '@' + (this).username ; 

  return this.username; 
};

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('artist_pinfo', userSchema);

// make this available to our users in our Node applications
module.exports = User;