var express = require('express');
var router = express.Router();
var Flats = require('../DB/FlatSchema')
var Audit = require('../DB/Audit')

var createFlat = function (req, res, next) {
    var flat = new Flats({
        number: req.body.number,
        isOwner: req.body.isOwner,
        ownerName: req.body.ownerName,
        residentName: req.body.residentName,
        ownerPhNo: req.body.ownerPhNo,
        residentPhNo: req.body.residentPhNo,
        createdDate: new Date()
    });
    flat.save(function (err, flat, numAffected) {
        console.log("Records Inserted : " + numAffected);
        if (err) {
            var response = {
                errorCode: -1,
                errorMessage: err
            };
            res.status(500).json(response);
        } else {
            var response = {
                successMessage: "Record inserted successfully",
                record: flat
            }
            res.status(200).json(response);
        }
    });
}

var updateFlat = function (req, res, next) {
    Flats.findByIdAndUpdate(req.body._id, {
        number: req.body.number,
        isOwner: req.body.isOwner,
        ownerName: req.body.ownerName,
        residentName: req.body.residentName,
        ownerPhNo: req.body.ownerPhNo,
        residentPhNo: req.body.residentPhNo,
        createdDate: new Date()
    }, function (err, flat, numAffected) {
        console.log("Records Updated : " + numAffected);
        if (err) {
            var response = {
                errorCode: -1,
                errorMessage: err
            };
            res.status(500).json(response);
        } else {
            var response = {
                successMessage: "Record Updated successfully",
                record: flat
            }
            res.status(200).json(response);
        }
    });
}
var getAllFlats = function (req, res, next) {
    Flats.find({}, function (err, flats) {
        if (err) {
            var response = {
                errorCode: -1,
                errorMessage: err
            };
            res.status(500).json(response);
        }
        res.status(200).json(flats);
    });
}

var findAflat = function (req, res, next) {
    Flats.findOne({ "number": req.params.flatNumber }, function (err, flat) {
        if (err) {
            var response = {
                errorCode: -1,
                errorMessage: err
            };
            res.status(500).json(response);
        }
        res.status(200).json(flat);
    })
}
var deleteAFlat = function (req, res, next) {
    console.log(req.params._id);

    Flats.findOne({ "_id": req.params._id }, function (err, flat) {
        var audit = new Audit({
            data:"Deleting Flat [" + JSON.stringify(flat)+"]",
            component:"Flats",
            createdDate: new Date()
        })
        audit.save();
    });

    Flats.deleteOne({ "_id": req.params._id }, function (err, flat) {
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
    createFlat: createFlat,
    getAllFlats: getAllFlats,
    findAflat: findAflat,
    updateFlat: updateFlat,
    deleteAFlat:deleteAFlat
}

/**
 * {
	"flatNumber":"F20",
        "isOwner":true,
        "ownerName":"TamilNadu",
        "residentName":"TamilNadu",
       "ownerPhNo":"90032212334",
        "residentPhNo":"90032212334"
}
 */