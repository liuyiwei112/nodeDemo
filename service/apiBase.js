var serverUrl = 'http://localhost:8090/beng/';
var apiBase = {
	userQuery:serverUrl + '/base/users',
	sumall:serverUrl + 'no/sumall',
	sumByDay:serverUrl + 'no/sumday/',
	openNoList:serverUrl + 'no/list/',
	openNoSync:serverUrl + 'no/synOpenData/',
	syncRate:serverUrl + 'no/synPl',
}

module.exports = apiBase
