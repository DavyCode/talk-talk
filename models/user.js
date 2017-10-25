var mongoose = require('mongoose'),
    passportlocalMongoose = require('passport-local-mongoose');


var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});
UserSchema.plugin(passportlocalMongoose);

module.exports = mongoose.model('User', UserSchema);


// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };

// var EmailSchema = new Schema({
//     email: {
//         type: String,
//         trim: true,
//         lowercase: true,
//         unique: true,
//         required: 'Email address is required',
//         validate: [validateEmail, 'Please fill a valid email address'],
//         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//     }
// });

// const validator = require('validator');

// email:{
// type:String,
// validate:{
//       validator: validator.isEmail,
//       message: '{VALUE} is not a valid email',
//       isAsync: false
//     }
// }

// npm install --save-dev validator


// var mongoose = require('mongoose');
// require('mongoose-type-email');
 
// var UserSchema = new mongoose.Schema({
//     email: {
//         work: mongoose.SchemaTypes.Email,
//         home: mongoose.SchemaTypes.Email
//     }
// }