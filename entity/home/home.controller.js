angular.module('gg').controller('homeController', homeController);

homeController.$inject = ['$scope', '$route', '$http', 'peopleFactory'];

function homeController($scope, $route, $http, peopleFactory) {
	var me = this;

	////////////////
	// FUNCTIONS //
	////////////////
	me.getPeople = getPeople;
	me.init = init;
	me.checkGender = checkGender;
	me.next = next;

	////////////////
	// VARIABLES //
	////////////////
	me.currentPeople;
	me.score;
	me.try;

	function getPeople() {
		peopleFactory.init().$promise.then(function(response) {
			me.currentPeople = response;
		}).catch(function(error) {
			alert('Error');
		});
	}

	function checkGender(gender) {
		me.try++;
		if (gender == me.currentPeople.gender) {
			me.result = true;
			localStorage.setItem('ggScore', parseInt(localStorage.getItem('ggScore'))+parseInt(1));
			me.score = localStorage.getItem('ggScore');
		} else {
			me.result = false;
		}
	}

	function next() {
		me.result = null;
		getPeople();
	}

	function init() {
		me.result = null;
		getPeople();
		localStorage.removeItem('ggScore');
		localStorage.setItem('ggScore', 0);
		me.score = localStorage.getItem('ggScore');
		me.try = 0;
	}

	init();
}
