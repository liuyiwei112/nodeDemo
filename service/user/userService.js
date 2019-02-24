var apiBase = require('../apiBase');
var request = require('sync-request');

var userService = {
	
	getUserById : function(_id){
		console.log(apiBase)
		var $url = apiBase.userQuery + '?id='+_id
		var res = request('get',$url);
		console.log(res.getBody());
		return res.getBody();
	}
	
	
}

module.exports = userService
