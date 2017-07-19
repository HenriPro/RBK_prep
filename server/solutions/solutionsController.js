var solutions = require('./solutionsModel.js')

module.exports={
	addSolution : function(req, res, next) {
		var solution = req.body.solution;
		var type= req.body.type;
		var questionText =req.body.questionText;
		var	slide =req.body.slide;
		var lecture = req.body.lecture;

		solutions.findOne({questionText : questionText},function(err,results){
			if(results){
				next(new Error('Question Already exist'));
			}else{
				solutions.create({
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
	}
}