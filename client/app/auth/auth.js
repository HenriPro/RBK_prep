angular.module('prep.signin',[])

.controller('SigninController',function($scope, Auth){
	$scope.user = {};

	$scope.signin = function (){
		Auth.signin($scope.user)
		.then(function(resp){
			console.log(resp)
			if(!resp.token){
				console.log("there were no response");
			}else{
				console.log(resp.token)
			}
		})
	}
})