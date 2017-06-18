angular.module('prep.weeks',[])

.controller('WeeksController',function($scope , Weeks){
    $scope.weeks = {};

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
	$scope.getAllWeeks();
})