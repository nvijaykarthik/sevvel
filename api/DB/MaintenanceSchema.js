var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MaintenanceSchema=new Schema({
    flatNumber:{type:String,require:true},
    date:{type:Date,require:true},
    amount:{type:Number,require:true},
    comment:{type:String,require:false},
    createdDate:{type:Date,require:true}
})

var Maintenances=mongoose.model('Maintenances',MaintenanceSchema);

module.exports=Maintenances;