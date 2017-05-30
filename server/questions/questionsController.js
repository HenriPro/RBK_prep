var Question = require('./questionsModel.js');
var Lecture = require('../lectures/lecturesModel.js');

module.exports={
	addQuestion : function ( req, res, next ) {
		var questionText = req.body.questionText;
		var example = req.body.example;
		var type = req.body.type;
		var image = req.body.image;
		var lectureID = req.body.lectureID;

		//check if the question exists, if not create new one and add it.
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
						//after adding new question, update the lecture and add the new generated question Id to the related lecture
						Lecture.update({'_id': lectureID}, {$push :{'questions': question._id}},
						function(err,questionLecture){
							if(err){
								next(new Error("There was an error adding"));
							}else{
								res.send({ lectureModifeied: questionLecture , question : question });								
							}
						});
					}
				})
			}
		})
	},
	removeQuestion : function ( req, res ) {

	},
	editQuestion : function ( req, res, next ) {
		var data = req.body;
		var questionID= req.body._id;

		//update any question details.
		Question.update({'_id': questionID},{ '$set' : data },
		function(err, modifiedQues){
			if(err){
				next(new Error("Error while updating"));
			}else{
				res.send({ modifiedQues : modifiedQues });
			}
		})
	},
	getQuestion : function ( req, res ) {

	},
	getAllQuestions : function ( req, res) {

	}
}