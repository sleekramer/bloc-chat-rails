(function () {
  function ChatRooms($http) {
    var ChatRooms = {};
    /**
    * @desc variable that will be assigned an array of all chat room objects upon page load
    * @type {Array}
    */
    ChatRooms.allRooms = [];
    /**
    * @function getAll()
    * @desc GETs all chat_room objects from the server and assigns them to ChatRooms.allRooms
    * @return {Object} http GET request response
    */
    ChatRooms.getAll = function () {
      return $http.get('/chat_rooms').then(function success(data) {
        angular.copy(data.data, ChatRooms.allRooms);
      }, function error (rejection) {
        console.log(rejection);
      });
    };

    /**
    * @function createRoom()
    * @desc POST a chatRoom object to the server
    * @param {Object} chatRoom with name attribute
    * @return {Object} chatRoom
    */
    ChatRooms.createRoom = function (chatRoom) {
      return $http.post('/chat_rooms', chatRoom).then(function success(data) {
        ChatRooms.allRooms.push(data.data);
      }, function error (rejection) {
        console.log(rejection);
      })
    };

    return ChatRooms;
  }
  angular
    .module("blocChat")
    .factory("ChatRooms", ["$http", ChatRooms]);
})();
