app.controller('showController', function($scope, $routeParams, $location, mainFactory){
  console.log('Im able to load my showController with my home index.html');
  mainFactory.getQuestion($routeParams.id, function(data){
    console.log('show controller', data);
    $scope.question = data[0];
  })
  mainFactory.getAnswers($routeParams.id, function(data){
    console.log('show controller', data);
    $scope.answers = data;
  })
})
