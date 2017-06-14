angular.module('prep.services',[])

.factory('Auth',function($http){

	var signin = function(user) {
		return $http({
			method : 'POST',
			url : 'api/users/signin',
			data : user
		})
		.then(function(resp){
			return resp.data;
		})
		.catch(function(error){
			return error;
		})
	};

	var signup = function(user) {
		return $http({
			method : 'POST',
			url : '/api/users/signup',
			data : user
		})
		.then(function(resp){
			return resp.data;
		})
		.catch(function(error){
			return error;
		})
	};
	
	return{
		signin : signin,
		signup : signup
	}
})

.factory('Contents',function($http){
	var getLecturesByWeek = function (week){
		return $http({
			method : 'GET',
			url: '/api/lectures/getLectureByWeek/' + week
		})
		.then(function(resp){
			return resp.data;
		})
		.catch(function(error){
			return error;
		})
	}
	return {
		getLecturesByWeek : getLecturesByWeek
	}
})
