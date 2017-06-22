angular.module('prep',[
	'prep.signin',
	'prep.contents',
	'prep.weeks',
	'prep.services',
	'ngRoute'
])
.config(function ($routeProvider, $httpProvider ,$locationProvider, $sceDelegateProvider ,hljsServiceProvider){
    $locationProvider.hashPrefix('');
 	$locationProvider.html5Mode(true);

	//code to configure code syntax highlighter options .
	hljsServiceProvider.setOptions({
    	// replace tab with 4 spaces
    	tabReplace: '    '
  	});
	hljs.initHighlighting();
		  
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
	.when('/:lecture',{
		templateUrl : 'app/contents/contents.html',
		controller : 'ContentsController'
	})
	.otherwise({
      redirectTo: '/'
    });
})
.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        return original.apply($location, [path]);
    };
}])