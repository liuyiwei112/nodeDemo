var apiBase = require('./apiBase');
var request = require('sync-request');

var openNoService = {
	
	summaryAll: function(summaryType){
		var $url = apiBase.summaryAll+'?summaryType='+summaryType;
		var res = request('get',$url);
		console.log(res.getBody());
		var bd = JSON.parse(res.getBody());
		if(bd.code==200){
			return bd.data;
		}
		return null;
	},
	listSomeDaySum: function(guessType,summaryType){
		var $url = apiBase.listSomeDaySum+guessType+'?summaryType='+summaryType;
		var res = request('get',$url);
		console.log(res.getBody());
		var bd = JSON.parse(res.getBody());
		if(bd.code==200){
			return bd.data;
		}
		return null;
	},
	postSomeDaySum: function(guessType,summaryType,openTime){
		var $url = apiBase.sumSomeDay+guessType;
		var res = request('post',$url,{
			'summaryType':summaryType,
			'openTime':openTime
		});
		console.log(res.getBody());
		var bd = JSON.parse(res.getBody());
		if(bd.code==200){
			return bd.data;
		}
		return null;
	},
	openNoList: function(guessType,page,pageSize){
		var $url = apiBase.openNoList+guessType+'?openTime=&page='+page+'&pageSize='+pageSize;
		var res = request('get',$url);
		console.log(res.getBody());
		var bd = JSON.parse(res.getBody());
		if(bd.code==200){
			return bd.data;
		}
		return null;
	},
	openNoSync: function(guessType){
		var $url = apiBase.openNoSync+guessType;
		var res = request('get',$url);
		console.log(res.getBody());
		var bd = JSON.parse(res.getBody());
		return bd.message;
	},
	syncRate:function(){
		var $url = apiBase.syncRate;
		var res = request('get',$url);
		console.log(res.getBody());
		var bd = JSON.parse(res.getBody());
		return bd;
	}
	
	
}

module.exports = openNoService;