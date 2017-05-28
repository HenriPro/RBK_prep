var usersController=require('../users/usersController.js');
var questionsController= require('../questions/questionsController.js');
var lecturesController=require('../lectures/lecturesController.js');

module.exports=function (app, express){
	app.post('/api/users/signin',usersController.signin);
	app.post('/api/users/signup',usersController.signup);

	app.post('/api/lectures/addLecture', lecturesController.addLecture)
}