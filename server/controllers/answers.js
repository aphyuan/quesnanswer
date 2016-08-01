var mongoose = require('mongoose');
var Answer = mongoose.model('Answers');

module.exports = (function(){
  return{
    createAnswer: function(req, res){
      answer = new Answer(req.body);
      answer.save(function(err, result){
        if(err){
          console.log(err);
          console.log('err creating a new answer');
        }else{
          console.log('this is a new answer', result);
          res.json(result);
        }
      })
    },
    getAnswers: function(req, res){
      Answer.find({question_id: req.params.id}).sort({like:-1}).exec(function(err, result){
        if(err){
          console.log("this is the answer err you got", err);
        }else{
          console.log("this is our answers", result);
          res.json(result);
        }
      });
    },
    addlike: function(req, res){
      Answer.findOne({_id: req.params.id}, function(err, result){
        if(err){
          console.log("this is the like increment err you got", err);
        }else{
          result.like = result.like + 1;
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
