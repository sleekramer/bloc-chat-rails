(function () {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('room', {
        url: 'room/{id}',
        controller: 'RoomCtrl as room',
        templateUrl: 'room/_room.html',
        resolve: {
          roomPromise: ["ChatRooms", "$stateParams", function (ChatRooms, $stateParams) {
            return ChatRooms.getRoom($stateParams.id);
          }]
        }
      });
  }
  angular
    .module("blocChat", ["ui.router", "templates", "ui.bootstrap"])
    .config(config);
})();
