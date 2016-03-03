(function () {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    // $stateProvider
    //   .state(
    //   );
  }
  angular
    .module("blocChat", ["ui.router", "templates"])
    .config(config);
})();
