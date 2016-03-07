(function () {
  function usernameModalCtrl ($scope, $uibModalInstance) {
    this.submit = function () {
      $uibModalInstance.close($scope.newUsername.trim
      ());
    }
  }
  angular
    .module("blocChat")
    .controller("usernameModalCtrl", ["$scope", "$uibModalInstance", usernameModalCtrl]);
})();
