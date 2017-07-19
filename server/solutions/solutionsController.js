var Solutions = require('./solutionsModel.js')

module.exports={
	addSolution : function(req, res, next) {
		var solution = req.body.solution;
		var type= req.body.type;
		var questionText =req.body.questionText;
		var	slide =req.body.slide;
		var lecture = req.body.lecture;
		var number = req.body.number;

		Solutions.findOne({questionText : questionText},function(err,results){
			if(results){
				next(new Error('Question Already exist'));
			}else{
				Solutions.create({
					solution : solution,
					type : type,
					questionText : questionText,
					slide : slide,
					lecture : lecture
				},function(err,answer){
					if(err){
						next(new Error('Error adding new solution'))
					}else{
						res.send({ answer: answer });
					}
				})
			}
		})
	},
	getAllLectureSolutions : function ( req, res, next) {
		var lecture = req.params.lecture;

		Solutions.find({lecture : lecture},function(err,results){
			if(results){
				res.send({ answers : results });
			}else{
				next(new Error('No lecture solution was found !'))
			}
		})
	}
}