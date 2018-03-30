var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MaintenanceDetailSchema = require('../DB/MaintenanceDetailSchema')

var MaintenanceSchema=new Schema({
    month:{type:Number,require:true},
    year:{type:Number,require:true},
    tenure:{type:Number,require:true},
    amount:{type:Number,require:false},
    createdDate:{type:Date,require:true},
    details:[MaintenanceDetailSchema.MaintenanceDetailSchema]
});


MaintenanceSchema.index({month: 1, year: 1}, {unique: true});

var Maintenance=mongoose.model('Maintenance',MaintenanceSchema);

module.exports=Maintenance;