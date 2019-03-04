var serverUrl = 'http://localhost:8090/beng/';
var apiBase = {
	summaryAll:serverUrl + '/summary/summaryAll',
	listSomeDaySum:serverUrl + 'summary/someday/list/',
	sumSomeDay:serverUrl + 'summary/someday/',
	openNoList:serverUrl + 'no/list/',
	openNoSync:serverUrl + 'no/synOpenData/',
	syncRate:serverUrl + 'no/synPl',
}

module.exports = apiBase
