var apiBase = require('./apiBase');

var menuService  = {
	
	menuList: function(){
		
		var arr = []
		arr.push({id:'1',menuName:'全包统计',menuUrl:'/allIn'});
		arr.push({id:'1',menuName:'返奖率高统计',menuUrl:'/partIn'});
		arr.push({id:'2',menuName:'幸运28查询',menuUrl:'/luck'});
		arr.push({id:'3',menuName:'开心16查询',menuUrl:'/happy'});
		arr.push({id:'4',menuName:'pk5查询',menuUrl:'/pk5'});
		arr.push({id:'5',menuName:'三国杀查询',menuUrl:'/sgs'});
		
		return arr;
		
	}
	
	
}

module.exports = menuService
