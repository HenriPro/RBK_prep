angular.module('prep.contents',['hljs'])

.controller('ContentsController',function($scope , Contents, $routeParams){
	console.log($routeParams.lecture);
	$scope.slide = {};
	$scope.title = "";
	$scope.week = "";
	$scope.questions = [];
	$scope.subTitle = "";
	$scope.day = "";
	$scope.part = "";
	$scope.questions = [];
	
	Contents.getLectureByTitle ($routeParams.lecture)
	.then(function(resp){
		console.log(resp);
		$scope.slide.src = resp.lecture.slide;
		$scope.title = resp.lecture.title;
		$scope.week = resp.lecture.week;
		$scope.subTitle = resp.lecture.subTitle;
		$scope.day = resp.lecture.day;
		$scope.part = resp.lecture.part;
		$scope.questions = resp.lecture.questions;
		 $scope.str=[];

	 Contents.getLectureQuestions(resp.lecture._id)
	 .then(function(resp){
		 console.log(resp);
		 $scope.questions=resp.questions;
		})
	})	
})