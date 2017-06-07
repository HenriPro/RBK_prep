angular.module('prep',[
	'prep.signin',
	'prep.contents',
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
	.when('/contents',{
		templateUrl : 'app/contents/contents.html',
		controller : 'ContentsController'
	})
	.otherwise({
      redirectTo: '/'
    });
})