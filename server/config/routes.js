var usersController=require('../users/usersController.js');

module.exports=function (app, express){
	console.log('eh')
	app.post('/api/users/signin',usersController.signin);
	app.post('/api/users/signup',usersController.signup);
}