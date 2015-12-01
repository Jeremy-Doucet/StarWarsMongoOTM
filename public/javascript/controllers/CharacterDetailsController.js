(function() {
  "use strict";
  angular.module('app').controller('CharacterDetailsController', CharacterDetailsController);
  function CharacterDetailsController($state, $stateParams, CharacterFactory) {
      var vm = this;
      if(!$stateParams.id) $state.go('Home');
      CharacterFactory.getCharacterById($stateParams.id).then(function(res) {
        vm.character = res;
      });
  }
})();
