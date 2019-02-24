var express = require('express');
var router = express.Router();
var userService = require('../service/user/userService');
var menuService = require('../service/menuService');
var openNoService = require('../service/openNoService');

/* GET home page. */
router.get('/', function(req, res, next) {
//	var userinfo = userService.getUserById('1');
	var menuinfo = menuService.menuList();
	res.render('index', { title: 'Express',menuinfo:menuinfo });
});

router.get('/home', function(req, res, next) {
	var sumall = openNoService.sumall();
	var luckSumDayData = openNoService.sumByDay('luck');
	var happySumDayData = openNoService.sumByDay('happy');
	var pk5SumDayData = openNoService.sumByDay('pk5');
	var sgsSumDayData = openNoService.sumByDay('sgs');
	
	res.render('home', {
		sumall:sumall,
		luckSumDayData:JSON.stringify(luckSumDayData),
		happySumDayData:JSON.stringify(happySumDayData),
		pk5SumDayData:JSON.stringify(pk5SumDayData),
		sgsSumDayData:JSON.stringify(sgsSumDayData)
	});
});

router.get('/luck', function(req, res, next) {
	res.render('luck', {});
});

router.get('/happy', function(req, res, next) {
	res.render('happy', {});
});

router.get('/pk5', function(req, res, next) {
	res.render('pk5', {});
});

router.get('/sgs', function(req, res, next) {
	res.render('sgs', {});
});

module.exports = router;
