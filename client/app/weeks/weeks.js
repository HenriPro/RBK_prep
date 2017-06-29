angular.module('prep.weeks',[])

.controller('WeeksController',function($scope , $location, Weeks, Auth,$window, $rootScope){
    $scope.weeks = {};
	$rootScope.authenticated= true;
	console.log("weeks",$rootScope.authenticated)
	$scope.getAllWeeks = function (){
		Weeks.getLecturesByWeek(1)
		.then(function(resp){
			$scope.weeks['one']=resp.results;		
		})
		Weeks.getLecturesByWeek(2)
		.then(function(resp){
			$scope.weeks['two']=resp.results;
		})
		Weeks.getLecturesByWeek(3)
		.then(function(resp){
			$scope.weeks['three']=resp.results;	
		})
		Weeks.getLecturesByWeek(4)
		.then(function(resp){
			$scope.weeks['four']=resp.results;		
		})
		Weeks.getLecturesByWeek(5)
		.then(function(resp){
			$scope.weeks['five']=resp.results;		
		})
	}

	$scope.logout=function(){
		Auth.signout();
		console.log($scope.isAuth , $window.localStorage.getItem('rbk.prep'))
	}

	$scope.isAuth = Auth.isAuth();
	$scope.getAllWeeks();
})