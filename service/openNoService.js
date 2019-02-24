var apiBase = require('./apiBase');
var request = require('sync-request');

var openNoService = {
	
	sumall:function(){
		var $url = apiBase.sumall;
		var res = request('get',$url);
		console.log(res.getBody());
		var bd = JSON.parse(res.getBody());
		if(bd.code==200){
			return bd.data;
		}
		return null;
	},
	sumByDay: function(guessType){
		var $url = apiBase.sumByDay+guessType;
		var res = request('get',$url);
		console.log(res.getBody());
		var bd = JSON.parse(res.getBody());
		if(bd.code==200){
			return bd.data;
		}
		return null;
	},
	openNoList: function(guessType,page,pageSize){
		var $url = apiBase.openNoList+guessType+'?page='+page+'&pageSize='+pageSize;
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