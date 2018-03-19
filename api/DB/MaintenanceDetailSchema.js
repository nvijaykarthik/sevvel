var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MaintenanceDetailSchema=new Schema({
    flatNumber:{type:String,require:true},
    month:{type:Number,require:true},
    year:{type:Number,require:true},
    amount:{type:Number,require:true},
    comment:{type:String,require:false,default:""},
    status:{type:String,required:true, enum : ['PENDING','PAID'],default: 'PENDING'},
    createdDate:{type:Date,require:true,default:new Date()},
    updatedDate:{type:Date,require:true,default:new Date()},
})

var MaintenancesDetail=mongoose.model('MaintenanceDetail',MaintenanceDetailSchema);

module.exports={MaintenancesDetail,MaintenanceDetailSchema};