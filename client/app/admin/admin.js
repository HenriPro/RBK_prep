angular.module('prep.admin',[])

.controller('AdminController',function($scope, Admin, $location, $window, $rootScope){

  Admin.checkIfAdmin()
  .then(function(resp){
    console.log(resp);
    $scope.isAdmin = resp
  })
  .catch(function(err){
    console.log(err)
  })
})
