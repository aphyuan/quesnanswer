app.controller('indexController', function($scope, $location, mainFactory){
  console.log('Im able to load my frontController with my frontpage');
  $scope.createUser = function(){
    mainFactory.addUsername($scope.username, function(user){
      $scope.user = user;
      $location.path('/home');
    })
  }
})
