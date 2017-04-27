angular
  .module('rentApp')
  .controller( 'MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth'];
function MainCtrl($rootScope, $state, $auth) {
  const vm = this;

  vm.navIsOpen = false;
  vm.isAuthenticated = $auth.isAuthenticated;

  vm.logout = logout;

  function logout() {
    $auth.logout(); //remove the token
    location.reload();
    $state.go('login');
  }


  $rootScope.$on('error', (e, err) => {
    vm.stateHasChanged = false;
    vm.message = err.data.message;
    if(err.status === 401) $state.go('login');
  });

  $rootScope.$on('$stateChangeSuccess', () => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    if($auth.getPayload()) vm.profilePageId = $auth.getPayload().userId;
    vm.navIsOpen = false;
  });

}
