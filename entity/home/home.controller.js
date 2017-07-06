angular.module('gg').controller('homeController', homeController);

homeController.$inject = ['$scope', '$route', 'peopleFactory'];

function homeController($scope, $route, peopleFactory){
	var me = this;

	////////////////
	// FUNCTIONS //
	////////////////
	me.getPeople = getPeople;
	me.init = init;

	////////////////
	// VARIABLES //
	////////////////
	me.currentPeople;

	function getPeople(){
		peopleFactory.init().$promise.then(function(response){
			me.currentPeople = response;
		}).catch(function(error){
			alert('Error');
		});
	}

	function init(){
		getPeople();
	}

	init();
}
