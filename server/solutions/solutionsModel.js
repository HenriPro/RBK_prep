var mongoose = require('mongoose');

var solutionsSchema = new mongoose.Schema({
	type : String,
	questionText : String,
	solution : String,
	slide : String,
	lecture : {
		required : true,
		type : String
	}
})

module.exports=mongoose.model('answers',solutionsSchema);