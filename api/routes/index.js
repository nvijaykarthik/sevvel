var express = require('express');
var router = express.Router();
var flats=require("../controller/flats")
var maintenances=require('../controller/maintenance')
var expences=require('../controller/expence')
var common=require('../controller/common')

router.post('/flats', flats.createFlat);
router.get("/flats",flats.getAllFlats);
router.get("/flats/:flatNumber",flats.findAflat);
router.put("/flats",flats.updateFlat);
router.delete("/flats/:_id",flats.deleteAFlat)
/** maintanence routers */
router.post('/maintenance', maintenances.addAMaint);
router.get('/maintenance', maintenances.getAllMaint);
router.get("/maintenance/:flatNumber",maintenances.getMaintByFlat);
router.get('/maintenance/:year/:month',maintenances.getMaintByMonth);
router.put('/maintenance', maintenances.updateMaint);
router.delete("/maintenance/:_id",maintenances.deleteMaint);

router.post('/expence', expences.addAExpen);
router.get('/expence', expences.getAllExpen);
router.get('/expence/:year/:month',expences.getExpenByMonth);
router.put('/expence', expences.updateExpen);
router.delete("/expence/:_id",expences.deleteExpence);
router.get('/totalCash',common.getTotalCashInHand);
//router.get('/totalCashByTenture/:year/:month',common.getMaintByTenture);

module.exports = router;
