var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./api/config');
var jwt = require('jsonwebtoken');

var index = require('./api/routes/index');
var users = require('./api/routes/users');
require('./api/DB/db')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'api', 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'ui')));
if (process.env.NODE_ENV !== 'production') {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    next();
  });
}

app.use('/user', users);

app.use('/api', function (req, res, next) {
  var token = req.cookies['x-auth-token'] || req.body.token || req.query.token || req.headers['x-auth-token'];
  console.log("Authorization Token:" + token);
  if (token) {
    jwt.verify(token, config.secret, function (err, decoded) {
      if (err) {
        console.log("Authorization Error ");
        var response = {
                errorCode: -1,
                errorMessage: err
            };
            res.status(401).json(response);
      } else {
        console.log("Authorization Success ");
        req.decoded = decoded;
        next();
      }
    });
  } else {
    console.log("Authorization Error : no token in the request");
   var response = {
                errorCode: -1,
                errorMessage: "Authorised token is empty"
            };
            res.status(401).json(response);
  }}
  );

app.use(function (req, res, next) {
  var token = req.cookies['x-auth-token'] || req.body.token || req.query.token || req.headers['x-auth-token'];
  console.log("Authorization Token:" + token);
  if (token) {
    jwt.verify(token, config.secret, function (err, decoded) {
      if (err) {
        console.log("Authorization Error ");
        res.redirect("/user");
      } else {
        console.log("Authorization Success ");
        req.decoded = decoded;
        next();
      }
    });
  } else {
    console.log("Authorization Error : no token in the request");
    res.redirect("/user");
  }

});

app.use('/api', index);
// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'ui/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  console.log(err);
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
