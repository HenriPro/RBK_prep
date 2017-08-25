angular.module('prep.weeks',[])

.controller('WeeksController',function($scope , $location, Weeks, Auth,$window, $rootScope, Solutions){
  $scope.weeks = {};
	$rootScope.authenticated= true;
	$scope.Solutions=[];

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

	$scope.getAllSolutionLectures = function(){
		Solutions.getAllSolutionLectures()
		.then(function(resp){
			$scope.Solutions=resp.solutions;
		})
	}

	$scope.logout=function(){
		Auth.signout();
	}

	$scope.isAuth = Auth.isAuth();
	$scope.getAllWeeks();
	$scope.getAllSolutionLectures();
})
