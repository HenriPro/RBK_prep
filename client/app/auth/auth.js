angular.module('prep.signin',[])

.controller('SigninController',function($scope, Auth, $location, $window){
	$scope.user = {};

	$scope.signin = function () {
		Auth.signin($scope.user)
		.then(function(resp){
			if(!resp.token){
				alert('Wrong Username or Password');
			}else{
				$window.localStorage.setItem('rbk.prep', resp.token);
				$location.path('/');
			}
		})
	}
})