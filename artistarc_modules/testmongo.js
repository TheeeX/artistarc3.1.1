var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://karanjeet96:wazxdws123@ds052408.mongolab.com:52408/artistarc_alpha');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
   console.log('yay!');
});

 console.log('loaded - testmongo.js!');
 /*
 exports.testFun = function () {
     return 3;
 }
 */
