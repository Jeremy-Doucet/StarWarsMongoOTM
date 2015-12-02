(function() {
	'use strict';
	angular.module('app')
	.factory('FactionFactory', FactionFactory);

	function FactionFactory($http, $q) {
		var o = {};

		o.getAllFactions = function() {
			var q = $q.defer();
			$http.get('/api/v1/factions').then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.getFactionById = function(id) {
			var q = $q.defer();
			$http.get('/api/v1/factions/' + id).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.createFaction = function(faction) {
			var q = $q.defer();
			$http.post('/api/v1/factions', faction).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.deleteFaction = function(id) {
			var q = $q.defer();
			$http.delete('/api/v1/factions/' + id).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		};

		return o;
	}
})();
