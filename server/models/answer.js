var mongoose = require('mongoose');

var AnswerSchema = mongoose.Schema({
  username: {type:String, required: true},
  question_id:{type: mongoose.Schema.Types.ObjectId, ref: "Questions"},
  like: Number,
  answer: {type:String, minlength:5},
  detail: String
})

mongoose.model('Answers', AnswerSchema);
