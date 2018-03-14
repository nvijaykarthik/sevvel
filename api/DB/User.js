var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema=new Schema({
    name:{type:String,require:true},
    password:{type:String,require:true}
})

var User=mongoose.model('User',UserSchema);

module.exports=User;