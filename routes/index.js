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

router.get('/allIn', function(req, res, next) {
	var sumall = openNoService.summaryAll('0');
	var luckSumDayData = openNoService.listSomeDaySum('luck','0');
	var happySumDayData = openNoService.listSomeDaySum('happy','0');
	var pk5SumDayData = openNoService.listSomeDaySum('pk5','0');
	var sgsSumDayData = openNoService.listSomeDaySum('sgs','0');
	
	res.render('allIn', {
		sumall:sumall,
		luckSumDayData:JSON.stringify(luckSumDayData),
		happySumDayData:JSON.stringify(happySumDayData),
		pk5SumDayData:JSON.stringify(pk5SumDayData),
		sgsSumDayData:JSON.stringify(sgsSumDayData),
	});
});

router.get('/partIn', function(req, res, next) {
	var sumall = openNoService.summaryAll('1');
	var luckSumDayData = openNoService.listSomeDaySum('luck','1');
	var happySumDayData = openNoService.listSomeDaySum('happy','1');
	var pk5SumDayData = openNoService.listSomeDaySum('pk5','1');
	var sgsSumDayData = openNoService.listSomeDaySum('sgs','1');
	
	res.render('partIn', {
		sumall:sumall,
		luckSumDayData:JSON.stringify(luckSumDayData),
		happySumDayData:JSON.stringify(happySumDayData),
		pk5SumDayData:JSON.stringify(pk5SumDayData),
		sgsSumDayData:JSON.stringify(sgsSumDayData),
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
