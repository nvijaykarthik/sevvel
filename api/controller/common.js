var express = require('express');
var router = express.Router();
var Expences = require('../DB/ExpenceSchema')
var Maintenances = require('../DB/MaintenanceSchema')

var getTotalCashInHand = function (req, res, next) {
    Expences.find({}, function (err, expen) {
        if (err) {
            var response = {
                errorCode: -1,
                errorMessage: err
            };
            res.status(500).json(response)
        }
        var totalExpence = expen.reduce((sum, m) => sum + m.amount, 0);
        Maintenances.find({}, function (err, maint) {
            if (err) {
                var response = {
                    errorCode: -1,
                    errorMessage: err
                };
                res.status(500).json(response)
            }
            var totalMaint = maint.reduce((sum, m) => sum + m.amount, 0);
            var cash = totalMaint - totalExpence;
            var resp = {
                totalCash: cash
            }
            res.status(200).json(resp);
        });

    });

}


var getMaintByTenture = function (req, res, next) {
    var year = parseInt(req.params.year);
    var month = parseInt(req.params.month);
    var startyear = year;
    var endyear = year;
    if (month < 7) {
        startyear = year - 1
    } else if (month >= 7) {
        endyear = year + 1
    }

    var firstDay = new Date(startyear, 6, 1)
    var lastDay = new Date(endyear, 5, 30)
    console.log("firstDay" + firstDay + "," + "lastDay" + lastDay);
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
            var totalmaint = maint.reduce((sum, m) => sum + m.amount, 0);
            Expences.find(
                {
                    date: {
                        $gte: firstDay,
                        $lte: lastDay
                    }
                }
                , function (err, expen) {
                    if (err) {
                        var response = {
                            errorCode: -1,
                            errorMessage: err
                        };
                        res.status(500).json(response)
                    }
                    var totalExpence = expen.reduce((sum, m) => sum + m.amount, 0);
                    var cash = totalMaint - totalExpence;
                    var resp = {
                        totalCash: cash
                    }
                    res.status(200).json(resp)
                });
        });
}
module.exports = {
    getTotalCashInHand: getTotalCashInHand,
    getMaintByTenture:getMaintByTenture
}