var express = require('express');
var router = express.Router();
var MaintenancesDetail = require('../DB/MaintenanceDetailSchema')
var Audit = require('../DB/Audit')
var Flats = require('../DB/FlatSchema')
var Maintenance = require('../DB/MaintenanceSchema')

var createMaintenance = function (req, res, next) {
    if (req.params && req.params.year && req.params.month && req.params.amount) {
        var _year = req.params.year;
        var _month = req.params.month;
        var _amount = req.params.amount;
        var _tenure = req.params.tenure
        console.log("Creating Maintenance for the year and month" + _year + "," + _month + "," + _amount);
        Flats.find({}, function (err, flats) {
            if (!flats) {
                var response = {
                    errorCode: -1,
                    errorMessage: "Please configure the flats to create maintenance"
                };
                res.status(500).json(response)
            } else if (err) {
                var response = {
                    errorCode: -1,
                    errorMessage: err
                };
                res.status(500).json(response);
            } else {
                //console.log("flats List :" + flats);
                var maints = new Maintenance({
                    month: _month,
                    year: _year,
                    amount: _amount,
                    createdDate: new Date(),
                    tenure: _tenure,
                    details: []
                });
                //console.log("New Maint :" + maints);
                flats.forEach(flat => {
                    //console.log("Adding maint Details for flat details :" + flat);
                    var maintdet = new MaintenancesDetail.MaintenancesDetail({
                        flatNumber: flat.number,
                        month: _month,
                        year: _year,
                        amount: _amount,

                    });
                    maints.details.push(maintdet)
                })
                console.log("New Maintenance with details :" + maints);
                maints.save(function (err, maint) {
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
        })
    } else {
        var response = {
            errorCode: -1,
            errorMessage: "Please specify year, month,amount"
        };
        res.status(500).json(response)
    }
}


var deleteMaintenance = function (req, res, next) {
    if (req.params && req.params._id) {
        Maintenance.deleteOne({ "_id": req.params._id }, function (err, suc) {
            if (err) {
                var response = {
                    errorCode: -1,
                    errorMessage: err
                };
                res.status(500).json(response);
            }
            res.status(200).json({ message: "Deleted Successfully" });
        })
    } else {
        var response = {
            errorCode: -1,
            errorMessage: "Please specify MaintenanceId"
        };
        res.status(500).json(response)
    }
}

var findMaintenanceDetails = function (req, res, next) {
    if (req.params && req.params._id) {
        Maintenance.findById(req.params._id)
            .exec((err, maint) => {
                if (err) {
                    var response = {
                        errorCode: -1,
                        errorMessage: err
                    };
                    res.status(500).json(response);
                } else if (!maint) {
                    res.status(404).json({ message: "Maintenance not found" });
                } else {
                    res.status(200).json(maint.details);
                }
            })
    } else {
        var response = {
            errorCode: -1,
            errorMessage: "Please specify MaintenanceId"
        };
        res.status(500).json(response)
    }
}

var findMaintenanceByYearAndMonth = function (req, res, next) {
    if (req.params && req.params.year && req.params.month) {
        Maintenance.findOne({ "year": req.params.year, "month": req.params.month })
            .exec((err, maint) => {
                if (err) {
                    var response = {
                        errorCode: -1,
                        errorMessage: err
                    };
                    res.status(500).json(response);
                } else if (!maint) {
                    res.status(404).json({ message: "Maintenance not found" });
                } else {
                    res.status(200).json(maint);
                }
            })
    } else {
        var response = {
            errorCode: -1,
            errorMessage: "Please specify Year and month"
        };
        res.status(500).json(response)
    }
}

var findMaintenanceByTenure = function (req, res, next) {
    if (req.params && req.params.tenure) {
        console.log("find by tenure" + req.params.tenure);
        Maintenance.find({ "tenure": req.params.tenure })
            .exec((err, maint) => {
                if (err) {
                    var response = {
                        errorCode: -1,
                        errorMessage: err
                    };
                    res.status(500).json(response);
                } else if (!maint) {
                    res.status(404).json({ message: "Maintenance not found" });
                } else {
                    res.status(200).json(maint);
                }
            })
    } else {
        var response = {
            errorCode: -1,
            errorMessage: "Please specify tenture"
        };
        res.status(500).json(response)
    }
}
var getAllMaint = function (req, res, next) {
    console.log("find by tenure" + req.params.tenure);
    Maintenance.find({})
        .exec((err, maint) => {
            if (err) {
                var response = {
                    errorCode: -1,
                    errorMessage: err
                };
                res.status(500).json(response);
            } else if (!maint) {
                res.status(404).json({ message: "Maintenance not found" });
            } else {
                res.status(200).json(maint);
            }
        })

}

var updateMaintenanceDetails = function (req, res, next) {
    if (req.params && req.params.maintId) {
        Maintenance.findById(req.params.maintId)
            .select('details')
            .exec((err, maint) => {
                if (err) {
                    var response = {
                        errorCode: -1,
                        errorMessage: err
                    };
                    res.status(500).json(response);
                }
                if (maint.details && maint.details.length > 0) {
                    let detail = maint.details.id(req.params.detailId)
                    if (!detail) {
                        res.status(404).json({ message: "MaintenanceDetail not found" });
                    } else {
                        detail.comment = req.body.comment;
                        detail.updatedDate = new Date();
                        detail.status = req.body.status;
                        maint.save((err, maint) => {
                            if (err) {
                                var response = {
                                    errorCode: -1,
                                    errorMessage: err
                                };
                                res.status(500).json(response);
                            } else {
                                res.status(200).json(maint);
                            }
                        })
                    }

                }
            })
    } else {
        var response = {
            errorCode: -1,
            errorMessage: "Please specify MaintenanceId"
        };
        res.status(500).json(response)
    }
}


module.exports = {
    createMaintenance,
    deleteMaintenance,
    findMaintenanceDetails,
    updateMaintenanceDetails,
    findMaintenanceByYearAndMonth,
    findMaintenanceByTenure,
    getAllMaint
}