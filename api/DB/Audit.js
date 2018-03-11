var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AuditSchema=new Schema({
    data:{type:String,require:true},
    component:{type:String,require:true},
    createdDate:{type:Date,require:true}
})

var Audit=mongoose.model('Audit',AuditSchema);

module.exports=Audit;