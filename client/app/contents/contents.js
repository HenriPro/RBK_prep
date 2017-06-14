angular.module('prep.contents',[])

.controller('ContentsController',function($scope , Contents){
	$scope.weeks = {};

	$scope.getAllWeeks = function (){
		Contents.getLecturesByWeek(1)
		.then(function(resp){
			$scope.weeks['one']=resp.results;		
		})
		Contents.getLecturesByWeek(2)
		.then(function(resp){
			$scope.weeks['two']=resp.results;
		})
		Contents.getLecturesByWeek(3)
		.then(function(resp){
			$scope.weeks['three']=resp.results;		
		})
		Contents.getLecturesByWeek(4)
		.then(function(resp){
			$scope.weeks['four']=resp.results;		
		})
		Contents.getLecturesByWeek(5)
		.then(function(resp){
			$scope.weeks['five']=resp.results;		
		})
		
	}
	$scope.getAllWeeks();
})