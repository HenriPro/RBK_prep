angular.module('prep.signin',[])

.controller('SigninController',function($scope, Auth, $location, $window, $rootScope){
	$scope.user = {};
	$rootScope.authenticated= false;
	console.log("auth",$rootScope.authenticated)

	$scope.signin = function () {
		Auth.signin($scope.user)
		.then(function(resp){
			console.log(resp.token)
			if(!resp.token){
				alert('Wrong Username or Password');
			}else{
				$window.localStorage.setItem('rbk.prep', resp.token);
				$location.path('/Array-Iteration-with-while-&-for');
			}
		})
	}
})