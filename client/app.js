var app = angular.module('app', ['ngRoute']);

(function(){
	app.config(function($routeProvider){
		$routeProvider
			.when('/',
			{
				controller: 'indexController',
				templateUrl: 'partials/homepage.html'
			})
      .when('/home',{
        controller: 'homeController',
        templateUrl: 'partials/index.html'
      })
			.when('/new_question', {
				controller: 'newController',
				templateUrl: 'partials/new.html'
			})
			.when('/question/:id', {
				controller: 'showController',
				templateUrl: 'partials/show.html'
			})
			.when('/question/:id/new_answer', {
				controller: 'answerController',
				templateUrl: 'partials/answer.html'
			})
			.when('/like/:id',{
				controller: 'likeController',
				templateUrl: 'partials/index.html'
			})
			.otherwise({
				redirectTo: '/index'
			});
	})
}());
