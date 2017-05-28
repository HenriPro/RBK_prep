var Lecture=require('./lecturesModel.js')

module.exports={
	addLecture : function ( req , res , next ) {
		console.log(req.body);
		var slide = req.body.slide;
		var title = req.body.title;
		var subTitle = req.body.subTitle;
		var week = req.body.week;
		var day = req.body.day;
		var part = req.body.part;

		Lecture.findOne({ slide: slide },function(err,results){
			if(results){
				next(new Error('Lecture already exist'));
			}else{
				Lecture.create({
					slide : slide ,
					title: title ,
					subTitle: subTitle ,
					week: week ,
					day: day ,
					part: part
				},function(err,lecture){
					if(lecture){
						res.json({ lecture: lecture });
					}else{
						next(err);
					}
				})
			}
		})

	},
	removeLecture : function ( req, res ) {

	},
	editLecture : function ( req, res ) {

	},
	addQuestiontoLecture : function ( req, res , next ){
		var lectureID = req.body.lectureID;
		var question = req.body.question;
		
		Lecture.update({'_id': lectureID}, {$push :{'questions': question}},
		function(err,question){
			if(err){
				next(new Error("There was an error adding"));
			}else{
				res.send({question: question});
			}
		});
	},
	getLecture : function ( req , res ){

	},
	getAllLectures : function ( req , res ){

	},
	getLecureQuestions : function ( req , res ){
		
	}
}