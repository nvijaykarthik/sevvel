var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var flatSchema=new Schema({
    number:{type:String,require:true},
    isOwner:{type:Boolean,require:true},
    ownerName:{type:String,require:true},
    residentName:{type:String,require:true},
    ownerPhNo:{type:String,require:true},
    residentPhNo:{type:String,require:true},
    createdDate:{type:Date,require:true}
})

var Flats=mongoose.model('flats',flatSchema);

module.exports=Flats;