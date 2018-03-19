var express         =   require('express');
var config          =   require('./config');
var bodyParser      =   require('body-parser');
var cookieParser    =   require('cookie-parser');
var session         =   require('express-session');



var app= express();
var PORT=process.env.PORT || config.express.SERVER_PORT ||3000;


app.use(function(req,res,next){
console.log("solicitando el recurso " + req.url);
next();
});
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: 'esteeselambientedeDev' }));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



app.listen(PORT);
console.log('Express up and runing on port: ' + PORT);