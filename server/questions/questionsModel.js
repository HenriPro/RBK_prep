var mongoose=require('mongoose');

var QuestionsSchema= new mongoose.Schema({
	type: {
		type: String,
		required: true
	},
	questionText: {
		type: String,
		required: true
	},
	example : String,
	image : String,
	lectureID: {type: mongoose.Schema.Types.ObjectId, ref: 'questions'}
})

module.exports=mongoose.model('questions',QuestionsSchema);