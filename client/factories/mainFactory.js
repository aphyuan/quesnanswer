app.factory('mainFactory', function($http){
  var factory = {};
  var loginuser = "";

  //from the very first, save the name login to the session loginuser
  factory.addUsername = function(data, callback){
    console.log('made the username to store to the mainFactory');
    loginuser = data;
    console.log(loginuser);
    callback(loginuser);
  };

  //get inside the homepage and retrieve the loginuser name.
  factory.getUsername = function(callback){
    callback(loginuser);
  };

  //get all the questions - used by the home index.html
  factory.getallquestions = function(callback){
    $http.get('/questions').success(function(output){
    console.log(output);
    callback(output);
    })
  };

  //get a single question
  factory.getQuestion = function(questionId, callback){
    $http.get('/question/'+questionId).success(function(output){
    console.log(output);
    callback(output);
    })
  };

  //create a new question and save it to database
  factory.createQuestion = function(data, callback){
    console.log(data);
    data.answers = 0;
    console.log(data);
    $http.post('/questions', data).success(function(data){
      console.log('make it back from backend this is our new question', data);
      callback(data);
    })
  }

  //create a new answer corresponding to the question
  factory.createAnswer = function(questionId, data, callback){
    console.log(questionId);
    data.like = 0;
    data.username = loginuser;
    data.question_id = questionId;
    console.log(data);
    $http.post('/answers', data).success(function(data){
      console.log('make it back from backend this is our new answer', data);
      $http.post('/questionincre/'+questionId).success(function(){
        console.log('make it back from backend this is number of answers');
      });
      callback(data);
    });
  }

  //get answers corresponding to the question
  factory.getAnswers = function(questionId, callback){
    console.log(questionId);
    $http.get('/answers/'+questionId).success(function(data){
      console.log('make it back from backend these are our answers', data);
      callback(data)
    });
  }

  factory.updatelike = function(answerId, callback){
    $http.post('/answerincre/'+answerId).success(function(){
      console.log('make it back from backend to increase the like');
    });
  }
  return factory;
})
