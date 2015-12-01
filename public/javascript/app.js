(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);

	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: '/templates/home.html',
      controller: 'HomeController as vm'
		})
		//###############################
		//# Faction States ##############
		//###############################
		.state('CreateFaction', {
			url: '/faction/create',
			templateUrl: '/templates/faction_create.html',
			controller: 'FactionCreateController as vm'
		});
		$urlRouterProvider.otherwise('/');

	}
})();