(function () {
  function RoomCtrl ($scope, ChatRooms, Message, $cookies) {
    this.name = ChatRooms.room.name;
    this.messages = ChatRooms.room.messages;
    this.submitMessage = function () {
      if ($scope.newMessageText){
        var message = {
          text: $scope.newMessageText,
          username: $cookies.get("currentBlocChatUser")
        };
        Message.create(ChatRooms.room.id, message);
      }
      $scope.newMessageText = "";
    };
  }
  angular
    .module("blocChat")
    .controller("RoomCtrl", ["$scope","ChatRooms", "Message", "$cookies", RoomCtrl]);
})();
