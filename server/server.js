var express=require('express');
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;

var app=express();

require('./config/middleware.js')(app,express);
require('./config/routes.js')(app,express);

mongoose.connect('mongodb://localhost/prep');

app.listen(8000,function(){
	console.log('App is now listning on 8000');
});

module.exports=app;