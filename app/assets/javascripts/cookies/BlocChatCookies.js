(function () {
  function BlocChatCookies ($cookies, $uibModal) {
    if (!$cookies.get("currentBlocChatUser") || $cookies.get("currentBlocChatUser") === '') {
      $uibModal.open({
        animation: true,
        keyboard: false,
        backdrop: 'static',
        templateUrl: 'cookies/setUsername.html',
        controller: 'usernameModalCtrl as usernameModal',
        size: 'sm'
      }).result.then(function success (username) {
        $cookies.put("currentBlocChatUser", username);
      }, function rejected (rejection) {
        console.log(rejection);
      });
    }
  }

  angular
    .module("blocChat")
    .run(["$cookies", "$uibModal", BlocChatCookies]);
})();
