const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Post = require("./models/home");
const logger = require('morgan');
const cookieParser = require('cookie-parser');
var   seedDB = require("./seeds");

mongoose.Promise = global.Promise;

const home  = require('./routes/home');
const users = require('./routes/users');

const app = express();


// Connect to database
const db = mongoose.connect("mongodb://127.0.0.1:27017/talktalk", {useMongoClient : true}, (err) => {
  (err) ? console.error(err, 'Error Connecting to Database!'):
     console.log('Database Connected Successfully. Build Safely!')
} );
seedDB();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));


app.use('/', home);
app.use('/users', users);












// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
