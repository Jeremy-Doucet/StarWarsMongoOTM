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
		})
		.state('FactionDetails', {
			url: '/faction/:id',
			templateUrl: '/templates/faction_details.html',
			controller: 'FactionDetailsController as vm'
		})
		//###############################
		//# Character States ############
		//###############################
		.state('CreateCharacter', {
			url: '/character/create/:factionId',
			templateUrl: '/templates/character_create.html',
			controller: 'CharacterCreateController as vm'
		})
		$urlRouterProvider.otherwise('/');

	}
})();
