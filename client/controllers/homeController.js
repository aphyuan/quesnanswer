app.controller('homeController', function($scope, $location, mainFactory){
  console.log('Im able to load my homeController with my home index.html');
  mainFactory.getUsername(function(data){
    console.log(data);
    $scope.username = data;
  })

  mainFactory.getallquestions(function(data){
    console.log(data);
    $scope.questions = data;
  })
})
