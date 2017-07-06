angular.module('gg').controller('homeController', homeController);

homeController.$inject = ['$scope', '$route', 'peopleFactory'];

function homeController($scope, $route, peopleFactory){
	var me = this;

	me.getPeople = getPeople;

	function getPeople(){
		peopleFactory.init().$promise.then(function(a){
			console.log(a);
		});
	}
}
