(function () {
  function Message (ChatRooms, $http) {
    var Message = {};

    Message.create = function (chatRoomId, message) {
      return $http.post('/chat_rooms/' + chatRoomId + '/messages', message).then(function success (data) {
        ChatRooms.room.messages.push(data.data);
      }, function error (rejection) {
        console.log(rejection);
      });
    };

    return Message;
  }
  angular
    .module("blocChat")
    .factory("Message", ["ChatRooms", "$http", Message]);
})();
