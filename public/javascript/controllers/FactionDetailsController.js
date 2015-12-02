(function() {
  "use strict";
  angular.module('app').controller('FactionDetailsController', FactionDetailsController);
  function FactionDetailsController($state, $stateParams, FactionFactory) {
      var vm = this;

      if(!$stateParams.id) $state.go('Home');
      FactionFactory.getFactionById($stateParams.id).then(function(res) {
        vm.faction = res;
      });

      vm.deleteFaction = function() {
        FactionFactory.deleteFaction($stateParams.id).then(function(res) {
          $state.go('Home');
        });
      };
  }
})();
