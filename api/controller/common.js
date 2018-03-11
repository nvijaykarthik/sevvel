var express = require('express');
var router = express.Router();
var Expences = require('../DB/ExpenceSchema')
var Maintenances = require('../DB/MaintenanceSchema')

var getTotalCashInHand=function(req,res,next){
    Expences.find({}, function (err, expen) {
        if (err) {
            var response = {
                errorCode: -1,
                errorMessage: err
            };
            res.status(500).json(response)
        }
        var totalExpence=expen.reduce((sum,m)=>sum+m.amount,0);
        Maintenances.find({}, function (err, maint) {
            if (err) {
                var response = {
                    errorCode: -1,
                    errorMessage: err
                };
                res.status(500).json(response)
            }
           var totalMaint=maint.reduce((sum,m)=>sum+m.amount,0);
           var cash=totalMaint-totalExpence;
           var resp={
               totalCash: cash
           }
           res.status(200).json(resp);
        });

    });
    
}
var getMaintByTenture = function (req, res, next) {
    var year = parseInt(req.params.year);
    var month = parseInt(req.params.month);
    

    var firstDay = new Date(year, month - 1, 1)
    var lastDay = new Date(year, month, 1)
    console.log("firstDay" + firstDay + "," + "lastDay" + lastDay)
    Maintenances.find(
        {
            date: {
                $gte: firstDay,
                $lte: lastDay
            }
        }
        , function (err, maint) {
            if (err) {
                var response = {
                    errorCode: -1,
                    errorMessage: err
                };
                res.status(500).json(response)
            }
            res.status(200).json(maint)
        });
}
module.exports={
    getTotalCashInHand:getTotalCashInHand,
}