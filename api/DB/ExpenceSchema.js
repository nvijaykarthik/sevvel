var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ExpenceSchema=new Schema({
    date:{type:Date,require:true},
    tenure:{type:Number,require:true},
    amount:{type:Number,require:true},
    comment:{type:String,require:false},
    createdDate:{type:Date,require:true}
})

var Expences=mongoose.model('Expences',ExpenceSchema);

module.exports=Expences;