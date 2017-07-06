'use strict';

var app = angular.module('gg', ['ngRoute']);

app.config(config);
config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider){
	$locationProvider.hashPrefix('');

	$routeProvider.
		when('/', {
			templateUrl: '../entity/home/home.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}
