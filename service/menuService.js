var apiBase = require('./apiBase');

var menuService  = {
	
	menuList: function(){
		
		var arr = []
		arr.push({id:'1',menuName:'首页',menuUrl:'/home'});
		arr.push({id:'2',menuName:'幸运28查询',menuUrl:'/luck'});
		arr.push({id:'3',menuName:'开心16查询',menuUrl:'/happy'});
		arr.push({id:'4',menuName:'pk5查询',menuUrl:'/pk5'});
		arr.push({id:'5',menuName:'三国杀查询',menuUrl:'/sgs'});
		
		return arr;
		
	}
	
	
}

module.exports = menuService
