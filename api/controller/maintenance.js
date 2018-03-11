var express = require('express');
var router = express.Router();
var Maintenances = require('../DB/MaintenanceSchema')
var Audit = require('../DB/Audit')
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

var getMaintByTenture = function (req, res, next) {
    var year = parseInt(req.params.year);
    var month = 7
    var firstDay = new Date(year, month - 1, 1)
    var lastDay = new Date(year+1, month, 1)
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

var deleteMaint = function (req, res, next) {
    console.log(req.params._id);

    Maintenances.findOne({ "_id": req.params._id }, function (err, maint) {
        var audit = new Audit({
            data:"Deleting maint [" + JSON.stringify(maint)+"]",
            component:"Maintenances",
            createdDate: new Date()
        })
        audit.save();
    });

    Maintenances.deleteOne({ "_id": req.params._id }, function (err, flat) {
        if (err) {
            var response = {
                errorCode: -1,
                errorMessage: err
            };
            res.status(500).json(response);
        }
        res.status(200).json({message:"Deleted Successfully"});
    })
}

module.exports = {
    getAllMaint: getAllMaint,
    getMaintByMonth: getMaintByMonth,
    addAMaint: addAMaint,
    getMaintByFlat: getMaintByFlat,
    updateMaint: updateMaint,
    deleteMaint:deleteMaint,
    getMaintByTenture:getMaintByTenture
}