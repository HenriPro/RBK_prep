var express=require('express');
var mongoose=require('mongoose');

var app=express();

require('./config/middleware.js')(app,express);
require('./config/routes.js')(app,express);

mongoose.connect('mongodb://localhost/prep');

app.listen(8000,function(){
	console.log('App is now listning');
});

module.exports=app;