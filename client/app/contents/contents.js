angular.module('prep.contents',['hljs'])

.controller('ContentsController',function($scope , Contents, $location, $routeParams, $rootScope){
	//change URL white space sympoles.
	var replaced = $routeParams.lecture.split(' ').join('-');
	$location.path(replaced, false);

	//revers operation to bring lecture from database even after refreshing;
	$scope.titleURL=$routeParams.lecture.split('-').join(' ');

	$rootScope.authenticated= true;

	$scope.slide = {};
	$scope.title = "";
	$scope.week = "";
	$scope.questions = [];
	$scope.subTitle = "";
	$scope.day = "";
	$scope.part = "";
	$scope.questions = [];
	$scope.BasicRequirments = false;
	$scope.MorePractice = false;
	$scope.Advanced = false

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
		//check if there is advanced,more practice and replace ; in the examples with new line
		for(var i=0; i < $scope.questions.length; i++){
		 	if($scope.questions[i].type === "Basic Requirements"){
		 		$scope.BasicRequirments = true;
		 	}else if($scope.questions[i].type === "More Practice"){
		 		$scope.MorePractice=true;
		 	}else if($scope.questions[i].type === "Advanced"){
		 		$scope.Advanced= true;
		 	}
		 	if($scope.questions[i]['example']){
			 	if($scope.questions[i]['example'].indexOf(';') > -1){
			 		$scope.questions[i]['example']=$scope.questions[i]['example'].replace(/;/g, "\r\n");
			 	}
			}
		}
	  })
	})	
})