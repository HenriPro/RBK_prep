angular.module('prep',[
	'prep.signin',
	'prep.services',
	'ngRoute'
])
.config(function ($routeProvider, $httpProvider ,$locationProvider){
    $locationProvider.hashPrefix('');
 	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/signin',{
		templateUrl: 'app/auth/signin.html',
		controller: 'SigninController'
	})
	.otherwise({
      redirectTo: '/'
    });
})