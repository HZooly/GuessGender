angular.module('gg').factory('peopleFactory', peopleFactory);

peopleFactory.$inject = ['uinameResource'];

function peopleFactory(uinameResource){

	return {
		init: init
	}

	function init(){
		return uinameResource.get();
	}
}
