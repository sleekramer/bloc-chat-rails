(function () {
  function HomeCtrl (ChatRooms) {
    ChatRooms.getAll();
    this.chatRooms = ChatRooms.allRooms;

  }
  angular
    .module("blocChat")
    .controller("HomeCtrl", ["ChatRooms", HomeCtrl]);
})();
