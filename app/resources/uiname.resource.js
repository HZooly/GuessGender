angular.module('gg').factory('uinameResource', uinameResource);

uinameResource.$inject = ['$resource'];

function uinameResource($resource) {
	return $resource('../app/proxy/proxy.php?url=https://uinames.com/api/');
}
