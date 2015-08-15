var express = require('express'); 

var app = express(); 
var path = require('path');
 
var port = 9000; 

app.set('views', path.join(__dirname, 'views')); //tell express where to find view files with app.set. 
//app.set sets up a key value pairs where the key is views and the path is defined by path.join the current directory "the root directory"
app.engine('html', require('hogan-express')); //use hogan templating engine
app.set('view engine', 'html'); // set view engine to use the html files
app.use(express.static(path.join(__dirname, 'public'))); //lets express find all the static files 

require('./routes/routes.js')(express, app);

app.listen(port, function() {
	console.log('ChatCAT Working on Port ' + port);

})