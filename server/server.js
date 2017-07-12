var express=require('express');
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;

var app=express();

require('./config/middleware.js')(app,express);
require('./config/routes.js')(app,express);

var mongoURI = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost/prep';

mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongodb connection open');
});

var port= process.env.PORT || 8000;

app.listen(port,function(){
	console.log('App is now listning on 8000');
});

module.exports=app;