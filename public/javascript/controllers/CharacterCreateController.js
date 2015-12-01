(function() {
  "use strict";
  angular.module('app').controller('CharacterCreateController', CharacterCreateController);
  function CharacterCreateController($state, $stateParams, CharacterFactory) {
      var vm = this;
      if(!$stateParams.factionId) $state.go('Home');
      vm.character = { isJedi: true, faction: $stateParams.factionId };

      vm.createCharacter = function() {
        CharacterFactory.createCharacter(vm.character).then(function(res) {
          $state.go('FactionDetails', { id: $stateParams.factionId });
        });
      };
  }
})();
