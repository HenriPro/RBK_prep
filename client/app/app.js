angular.module('prep',[
	'prep.signin',
	'ngRoute'
])
.config(function ($routeProvider, $httpProvider ,$locationProvider){
    $locationProvider.hashPrefix('');
 	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/signin',{
		templateUrl: 'app/signin.html',
		controller: 'SigninController'
	})
	.otherwise({
      redirectTo: '/'
    });
})