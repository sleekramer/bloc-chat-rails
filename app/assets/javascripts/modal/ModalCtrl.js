(function () {
  function ModalCtrl(ChatRooms, $uibModal) {
    this.open = function () {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: "modal/modalTemplate.html",
        controller: "ModalInstanceCtrl as modalInstance",
        size: "sm"
      });

      modalInstance.result.then(function success (roomName) {
        ChatRooms.createRoom({
          name: roomName
        });
      }, function error (response) {
        console.log(response);
      });
    };
  }

  function ModalInstanceCtrl($scope, ChatRooms, $uibModalInstance) {
    this.submit = function () {
      $uibModalInstance.close($scope.newRoom.name);
    };
    this.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    }
  }
  angular
    .module("blocChat")
    .controller("ModalCtrl", ["ChatRooms", "$uibModal", ModalCtrl])
    .controller("ModalInstanceCtrl", ["$scope", "ChatRooms","$uibModalInstance", ModalInstanceCtrl]);
})();
