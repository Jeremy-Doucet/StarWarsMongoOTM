(function() {
  "use strict";
  angular.module('app').controller('FactionCreateController', FactionCreateController);
  function FactionCreateController($state, FactionFactory) {
      var vm = this;
      vm.faction = { diplomacy: 'Neutral' };
  }
})();
