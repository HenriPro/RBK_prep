angular.module('prep',[
	'prep.signin',
	'ngRoute'
])
.config(function ($routeProvider, $httpProvider){
	$routeProvider
	.when('/signin',{
		templateUrl: 'app/signin.html',
		controller: 'SigninController'
	})
	.otherwise({
      redirectTo: '/'
    });
})