(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController(FactionFactory) {
		var vm = this;

		FactionFactory.getAllFactions().then(function(res) {
			vm.factions = res;
		});
	}
})();
