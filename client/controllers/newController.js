app.controller('newController', function($scope, $location, mainFactory){
  console.log('Im able to load my newController with my new question page');
  $scope.createQuestion = function(){
    mainFactory.createQuestion($scope.question, function(question){
      $location.path('/home');
    })
  },
  $scope.cancelCreation = function(){
    $location.path('/home');
  }
})
