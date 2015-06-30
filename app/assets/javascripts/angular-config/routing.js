angular
	.module('mainApp')
	.config(['$routeProvider', config]);

	function config($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'index.html',
				controller: 'MainController',
				controllerAs: 'mainCtrl' 
			})
			.when('/new', {
				templateUrl: "new.html",
				controller: "MainController",
				controllerAs: 'mainCtrl'
			})
			.when('/drinks/:id', {
				templateUrl: "show.html",
				controller: "MainController",
				controllerAs: "mainCtrl"
			})
			.when('/drinks/:id/edit', {
				templateUrl: "edit.html",
				controller: "MainController",
				controllerAs: "mainCtrl"
			})
			.otherwise({
				redirectTo: "/"
			})
	}