var mongoose = require('mongoose');
var Question = mongoose.model('Questions');

module.exports = (function(){
  return{
    getQuestions: function(req, res){
      Question.find({}, function(err, questions){
        if(err){
          console.log(err);
          console.log('getQuestions function questions controller');
        }else{
          res.json(questions);
        }
      })
    },
    createQuestion: function(req, res){
      question = new Question(req.body);
      question.save(function(err, result){
        if(err){
          console.log(err);
          console.log('err creating a new question');
        }else{
          console.log('this is a new question', result);
          res.json(result);
        }
      })
    },
  getQuestion: function(req, res){
    Question.find({_id: req.params.id}, function(err, result){
      if(err){
        console.log("this is the question err you are looking for", err);
      } else {
        console.log('this is our question',result);
        res.json(result);
      }
    })
  },
  increment: function(req, res){
    Question.findOne({_id: req.params.id}, function(err, result){
      if(err){
        console.log('this is the increment err you are looking for', err);
      }else{
        result.answers = result.answers + 1;
        result.save(function(err, result){
						if(err){
							console.log('couldnt save update mongoose', err);
						} else {
							console.log('foudn mongoose ', result);
							res.json(result);
						}
					})
      }
    })
  }
}
})();
