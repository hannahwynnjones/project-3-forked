angular
  .module('rentApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

//state for messages

  $stateProvider
   .state('itemsIndex', {
     url: '/',
     templateUrl: 'js/views/items/index.html',
     controller: 'itemIndexCtrl as index'
   })
   .state('itemsNew', {
     url: '/new',
     templateUrl: 'js/views/items/new.html',
     controller: 'itemsNewCtrl as itemsNew'
   })
   .state('itemsShow', {
     url: '/show/:id',
     templateUrl: 'js/views/items/show.html',
     controller: 'itemShowCtrl as show'
   })
   .state('itemEdit', {
     url: '/show/:id/edit',
     templateUrl: 'js/views/items/edit.html',
     controller: 'itemEditCtrl as edit'
   })
   .state('login', {
     url: '/login',
     templateUrl: 'js/views/auth/login.html',
     controller: 'LoginCtrl as login'
   })
   .state('register', {
     url: '/register',
     templateUrl: 'js/views/auth/register.html',
     controller: 'RegisterCtrl as register'
   })
   .state('profile', {
     url: '/user/:id',
     templateUrl: 'js/views/users/show.html',
     controller: 'ProfileCtrl as profile'
   })
   .state('editProfile', {
     url: '/user/:id/edit',
     templateUrl: 'js/views/users/edit.html',
     controller: 'EditCtrl as editProfile'
   })
   .state('payment', {
     url: '/request/:id/payment',
     templateUrl: 'js/views/items/makePayment.html',
     controller: 'PaymentController as payment'
   })
   .state('chatState', {
     url: '/chat',
     templateUrl: 'js/views/chat/allChat.html'
   });


  $urlRouterProvider.otherwise('/');

}
