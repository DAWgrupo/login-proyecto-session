const express = require('express')
	var session = require('express-session');
	const bodyParser = require('body-parser')
	var app = express();

	app.set('view engine', 'pug');
	app.use(session({secret: 'keyboard cat'}));
	
	app.use(bodyParser.urlencoded());
	app.use(bodyParser.json());
	

		var options = {
		    root: __dirname + '/views/',
		    dotfiles: 'deny',
		    headers: {
		        'x-timestamp': Date.now(),
		        'x-sent': true
		    }
		  }; 
	
	app.get('/',function(req,res){
	       
	     res.sendFile('login.html',options);

	});
	
	app.post('/Contenedor/',function(req,res){
	  var sessData = req.session;
	  sessData.usuario = req.body.user;
	  sessData.contrasenia = req.body.pass;
	  res.render(__dirname + '/views/secundaria', { usuario: sessData.usuario, contrasenia: sessData.contrasenia});
	

	});
	

	app.post('/Contenedor/',function(req,res){

	  var user = req.session.usuario 
	  var pass = req.session.contrasenia
	  res.render(__dirname + '/index', { usuario: user, contrasenia: pass});

	});
	
	 app.listen(process.env.PORT || 8888)
	



