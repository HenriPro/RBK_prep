var mongoose=require('mongoose');

var LecturesSchema=new mongoose.Schema({
	slide : String,
	title: String,
	subTitle: String,
	week : Number,
	day: Number,
	part: Number,
	questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'questions'}]
});

module.exports=mongoose.model('lectures',LecturesSchema);