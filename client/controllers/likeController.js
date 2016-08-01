app.controller('likeController', function($scope, $routeParams, $location, mainFactory){
  console.log('Im able to load my likeController with my home index.html');
  mainFactory.updatelike($routeParams.id, function(){
  console.log('show controller like');
  });
    $location.path('/home');
})
