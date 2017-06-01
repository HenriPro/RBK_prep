var usersController=require('../users/usersController.js');
var questionsController= require('../questions/questionsController.js');
var lecturesController=require('../lectures/lecturesController.js');

module.exports=function (app, express){

	////////////////////////////////////////////////////////
	//													///
	//				Users Routes						///	
	//													///
	///////////////////////////////////////////////////////

	app.post('/api/users/signin',usersController.signin);
	app.post('/api/users/signup',usersController.signup);

	////////////////////////////////////////////////////////
	//													///
	//				Questions Routes					///	
	//													///
	///////////////////////////////////////////////////////
	
	app.get('/api/questions/getQuestion/:id', questionsController.getQuestion);
	app.get('/api/questions/getAllLectureQuestions/:lectureID', questionsController.getAllLectureQuestions);
	app.post('/api/questions/addQuestion', questionsController.addQuestion);
	app.put('/api/questions/editQuestion', questionsController.editQuestion);
	app.delete('/api/questions/removeQuestion/:id', questionsController.removeQuestion);

	////////////////////////////////////////////////////////
	//													///
	//				Lectures Routes						///	
	//													///
	///////////////////////////////////////////////////////
	
	app.get('/api/lectures/getLecture',lecturesController.getLecture);
	app.get('/api/lectures/getAllLectures',lecturesController.getAllLectures);
	app.post('/api/lectures/addLecture', lecturesController.addLecture);
	app.post('/api/lectures/addQuestiontoLecture', lecturesController.addQuestiontoLecture);
}