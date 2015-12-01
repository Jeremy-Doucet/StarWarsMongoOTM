(function() {
  "use strict";
  angular.module('app').factory('CharacterFactory', CharacterFactory);
  function CharacterFactory($q, $http) {
    var o = { };

    o.createCharacter = function(character) {
      var q = $q.defer();
      $http.post('/api/v1/characters', character).then(function(res) {
        q.resolve(res.data);
      });
      return q.promise;
    };

    return o;
  }
})();
