var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
  content: {type:String, minlength:10},
  description: String,
  answers: Number
})

mongoose.model('Questions', QuestionSchema);
