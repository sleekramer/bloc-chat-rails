(function () {
  function RoomCtrl (ChatRooms) {
    this.name = ChatRooms.room.name;
    this.messages = ChatRooms.room.messages;
  }
  angular
    .module("blocChat")
    .controller("RoomCtrl", ["ChatRooms", RoomCtrl]);
})();
