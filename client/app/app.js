angular.module('prep',[
	'prep.signin',
	'prep.contents',
	'prep.weeks',
	'prep.services',
	'ngRoute'
])
.config(function ($routeProvider, $httpProvider ,$locationProvider, $sceDelegateProvider){
    $locationProvider.hashPrefix('');
 	$locationProvider.html5Mode(true);
	
	//this code is to fix Blocked loading resource 'which is the iframe slides' from url not allowed by $sceDelegate policy.
	$sceDelegateProvider.resourceUrlWhitelist([
		// Allow same origin resource loads.
		'self',
		// Allow loading from our assets domain. **.
		'https://docs.google.com/**'
	]);
	
	$routeProvider
	.when('/signin',{
		templateUrl: 'app/auth/signin.html',
		controller: 'SigninController'
	})
	.when('/contents/:lecture',{
		templateUrl : 'app/contents/contents.html',
		controller : 'ContentsController'
	})
	.otherwise({
      redirectTo: '/'
    });
})