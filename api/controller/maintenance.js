var express = require('express');
var router = express.Router();
var Maintenances = require('../DB/MaintenanceSchema')

var addAMaint = function (req, res, next) {
    console.log(req.body)
    var maint = new Maintenances({
        flatNumber: req.body.flatNumber,
        date: new Date(req.body.date),
        amount: req.body.amount,
        comment: req.body.comment,
        createdDate: new Date()
    });

    maint.save(function (err, maint) {
        if (err) {
            var response = {
                errorCode: -1,
                errorMessage: err
            };
            res.status(500).json(response)
        }
        res.status(200).json(maint);
    });
}

var updateMaint = function (req, res, next) {
    console.log(req.body)
    var maint = new Maintenances({
        flatNumber: req.body.flatNumber,
        date: new Date(req.body.date),
        amount: req.body.amount,
        comment: req.body.comment,
        createdDate: new Date()
    });

    Maintenances.findByIdAndUpdate(req.body._id,
        {
            date: new Date(req.body.date),
            amount: req.body.amount,
            comment: req.body.comment,
            createdDate: new Date()
        }, function (err, maint, numAffected) {
            console.log("Records Updated : " + numAffected);
            if (err) {
                var response = {
                    errorCode: -1,
                    errorMessage: err
                };
                res.status(500).json(response)
            }
            res.status(200).json(maint);
        });
}

var getAllMaint = function (req, res, next) {
    Maintenances.find({}, function (err, maint) {
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

var getMaintByMonth = function (req, res, next) {
    var year = parseInt(req.params.year);
    var month = parseInt(req.params.month);
    var firstDay = new Date(year, month - 1, 1)
    var lastDay = new Date(year, month, 0)
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

var getMaintByFlat = function (req, res, next) {
    Maintenances.find({ "flatNumber": req.params.flatNumber }, function (err, maint) {
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

module.exports = {
    getAllMaint: getAllMaint,
    getMaintByMonth: getMaintByMonth,
    addAMaint: addAMaint,
    getMaintByFlat: getMaintByFlat,
    updateMaint: updateMaint
}