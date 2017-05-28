var Question=require('./questionsModel.js');

module.exports={
	addQuestion : function ( req, res, next ) {
		var questionText = req.body.questionText;
		var example = req.body.example;
		var type = req.body.type;
		var image = req.body.image;
		var lectureID = req.body.lectureID;

		Question.findOne({ questionText : questionText },function(err,results){
			if(results){
				next(new Error('Question already Exist'));
			}else{
				Question.create({
					questionText : questionText ,
					type : type ,
					example : example ,
					image : image ,
					lectureID : lectureID 
				},function(err,question){
					if(err){
						next(new Error('There was error adding'));
					}else{
						res.send({ question: question });
					}
				})
			}
		})
	},
	removeQuestion : function ( req, res ) {

	},
	editQuestion : function ( req, res ) {

	},
	getQuestion : function ( req, res ) {

	},
	getAllQuestions : function ( req, res) {

	}
}