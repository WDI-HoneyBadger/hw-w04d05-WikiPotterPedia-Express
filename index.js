


var express = require('express');
var mustache = require('mustache');

var app = express();
var port = 3000;


app.engine('html', mustache());
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

var studentsController = require('./Controllers/students_controllers');
var housesController = require('./Controllers/houses_controller');

app.use('/students',studentsController);
app.use('/houses',housesController);
app.get('/', function(request, response){
  
    response.render('./index');
  })



app.listen(port, function() {
  console.log(`App is listening on port ${port}`);
})


















