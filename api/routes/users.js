var express = require('express');
var router = express.Router();
var User = require('../DB/User')
var logger = require('morgan');
var jwt = require('jsonwebtoken');
var config=require('../config');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render("login", { error: false, errorMessage: "" });
});

router.post('/login', function (req, res, next) {
  console.log(req.body.userId);
  User.findOne({ "name": req.body.userId }, function (err, user) {
    if (err) {
      console.log(err);
      res.render("login", { error: true, errorMessage: "Error while retrieving user" });
    }
    if (user === null) {
      console.log("User is null");
      res.render("login", { error: true, errorMessage: "User Not Found" });
    }
    console.log("user found" + user);
    if (user !== null && user.password == req.body.password) {
      const payload = {
        username: user.name
      };
      var token = jwt.sign(payload,config.secret, {
        expiresIn: "1d"// expires in 24 hours
      });
      res.cookie("x-auth-token", token)
      res.redirect("/index.html");
    } else {
      res.render("login", { error: true, errorMessage: "Wrong user and password " });
    }
  });

});
module.exports = router;

