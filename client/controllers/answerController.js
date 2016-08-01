app.controller('answerController', function($scope, $routeParams, $location, mainFactory){
  console.log('Im able to load my answerController with my home answer.html');
  mainFactory.getQuestion($routeParams.id, function(data){
    console.log('show controller', data);
    $scope.question = data[0];
  })
  $scope.returnpage = function(){
    $location.path('/home');
  }
  $scope.createAnswer = function(){
    mainFactory.createAnswer($routeParams.id, $scope.answer, function(answer){
      $location.path('/home');
    })
  }
})
