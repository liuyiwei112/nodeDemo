var express = require('express');
var router = express.Router();
var openNoService = require('../service/openNoService');


router.get('/openNoSync', function(req, res, next) {
	var guessType = req.query.guessType;
	var message = openNoService.openNoSync(guessType);
  	res.send(message);
});


/* GET Open No listing. */
router.get('/openNoList', function(req, res, next) {
	var guessType = req.query.guessType;
	var page = parseInt(req.query.page)+1;
	var size = req.query.size;
	var data = openNoService.openNoList(guessType,page,size);
  	res.send(data);
});


router.get('/syncRate', function(req, res, next) {
	var bd = openNoService.syncRate();
  	res.send(bd);
});


module.exports = router;