var express = require('express');
var mustache = require('mustache-express');

// app specific variables

var app = express();


var port = 3000;

var student_Controller = require('./controller/student_controller');

var house_Controller = require('./controller/house_controller');

// establishing mustache package to render html's files
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
// set up home route
app.get('/', function(request, response){
  response.render('./index');
})
// set up additional routes:
app.use('/students', student_Controller);
app.use('/houses', house_Controller);
// set up our app to listen to a port
app.listen(port, function() {
  console.log(`App is listening on port ${port}`);
}) 