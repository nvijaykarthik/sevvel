var express = require('express');
var router = express.Router();
var Expences = require('../DB/ExpenceSchema')

var addAExpen = function (req, res, next) {
    var expence = new Expences({
        date: new Date(req.body.date),
        amount: req.body.amount,
        comment: req.body.comment,
        createdDate: new Date()
    });

    expence.save(function (err, expen, numAffected) {
        console.log("Records inserted : " + numAffected);
        if (err) {
            var response = {
                errorCode: -1,
                errorMessage: err
            };
            res.status(500).json(response)
        }
        res.status(200).json(expen);
    });
}

var updateExpen = function (req, res, next) {
    var expence = new Expences({
        date: new Date(req.body.date),
        amount: req.body.amount,
        comment: req.body.comment,
        createdDate: new Date()
    });

    Expences.findByIdAndUpdate(req.body._id,
        {
            date: new Date(req.body.date),
            amount: req.body.amount,
            comment: req.body.comment,
            createdDate: new Date()
        }
        , function (err, expen, numAffected) {
            console.log("Records Updated : " + numAffected);
            if (err) {
                var response = {
                    errorCode: -1,
                    errorMessage: err
                };
                res.status(500).json(response)
            }
            res.status(200).json(expen);
        });
}

var getAllExpen = function (req, res, next) {
    Expences.find({}, function (err, expen) {
        if (err) {
            var response = {
                errorCode: -1,
                errorMessage: err
            };
            res.status(500).json(response)
        }
        res.status(200).json(expen)
    });
}

var getExpenByMonth = function (req, res, next) {
    var year = parseInt(req.params.year);
    var month = parseInt(req.params.month);
    var firstDay = new Date(year, month - 1, 1)
    var lastDay = new Date(year, month, 0)
    console.log("firstDay" + firstDay + "," + "lastDay" + lastDay)
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
            res.status(200).json(expen)
        });
}

module.exports = {
    getAllExpen: getAllExpen,
    getExpenByMonth: getExpenByMonth,
    addAExpen: addAExpen,
    updateExpen: updateExpen
}