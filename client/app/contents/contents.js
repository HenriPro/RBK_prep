angular.module('prep.contents',[])

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
		 for(var i=0; i< $scope.questions.length; i++){
			 if($scope.questions[i].example){
			 	$scope.questions[i].example = $scope.questions[i].example.split('\n');				 
			 }
		 }
	})
	// var s = '<b>' + "some text here" +'</b>';
	// var temp = document.getElementById('spec');
	// temp.innerHTML = s;
	// var htmlObject = temp.firstChild;
	})	
})