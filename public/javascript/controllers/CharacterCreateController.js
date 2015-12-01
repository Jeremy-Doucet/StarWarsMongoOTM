(function() {
  "use strict";
  angular.module('app').controller('CharacterCreateController', CharacterCreateController);
  function CharacterCreateController($state, $stateParams, CharacterFactory) {
      var vm = this;

      if(!$stateParams.factionId) $state.go('Home');
  }
})();
