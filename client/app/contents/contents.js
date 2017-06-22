angular.module('prep.contents',['hljs'])

.controller('ContentsController',function($scope , Contents, $location, $routeParams){
	//change URL white space sympoles.
	var replaced = $routeParams.lecture.split(' ').join('-');
	$location.path(replaced, false);

	//revers operation to bring lecture from database even after refreshing;
	$scope.titleURL=$routeParams.lecture.split('-').join(' ');

	$scope.slide = {};
	$scope.title = "";
	$scope.week = "";
	$scope.questions = [];
	$scope.subTitle = "";
	$scope.day = "";
	$scope.part = "";
	$scope.questions = [];

	Contents.getLectureByTitle ($scope.titleURL)
	.then(function(resp){
		$scope.slide.src = resp.lecture.slide;
		$scope.title = resp.lecture.title;
		$scope.week = resp.lecture.week;
		$scope.subTitle = resp.lecture.subTitle;
		$scope.day = resp.lecture.day;
		$scope.part = resp.lecture.part;
		$scope.questions = resp.lecture.questions;

	 Contents.getLectureQuestions(resp.lecture._id)
	 .then(function(resp){
		 $scope.questions=resp.questions;
		})
	})	
})