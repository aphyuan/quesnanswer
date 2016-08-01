var questions = require('./../controllers/questions.js');
var answers = require('./../controllers/answers.js');
module.exports = function(app){
  //get all questions
  app.get('/questions', function(req, res){
    console.log('made it to my /questions get routes');
    questions.getQuestions(req, res);
  })
  //create a new question
  app.post('/questions', function(req, res){
    console.log('made it to my /questions post routes');
    questions.createQuestion(req, res);
  })
  //get only one question
  app.get('/question/:id', function(req, res){
    console.log('made it to my /question/:id get routes');
    questions.getQuestion(req, res);
  });
  //increment of Answers
  app.post('/questionincre/:id', function(req, res){
    console.log('made it to my /questionincre/:id post routes');
    questions.increment(req, res);
  });
  //create a new answer
  app.post('/answers', function(req, res){
    console.log('made it to my /answers post routes');
    answers.createAnswer(req, res);
  })
  //get all answers for single question
  app.get('/answers/:id', function(req, res){
    console.log('made it to my /answers/:id get routes');
    answers.getAnswers(req, res);
  })
  //increment of like
  app.post('/answerincre/:id', function(req, res){
    console.log('made it to my /answerincre/:id post route');
    answers.addlike(req, res);
  })
}
