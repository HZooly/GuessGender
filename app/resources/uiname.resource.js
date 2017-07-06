angular.module('gg').factory('uinameResource', uinameResource);

uinameResource.$inject = ['$resource'];

function uinameResource($resource){
	return $resource('https://uinames.com/api');
}
