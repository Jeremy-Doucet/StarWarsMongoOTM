(function() {
  "use strict";
  angular.module('app').factory('CharacterFactory', CharacterFactory);
  function CharacterFactory($q, $http) {
    var o = { };

    o.getCharacterById = function(id) {
      var q = $q.defer();
      $http.get('/api/v1/characters/' + id).then(function(res) {
        q.resolve(res.data);
      });
      return q.promise;
    }

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
