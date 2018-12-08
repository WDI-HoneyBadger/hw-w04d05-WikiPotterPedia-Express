var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;

app.engine('html',mustache());
app.set('view engine','html')
app.set('views',__dirname + '/views');


var studentsController = require('./controllers/students_controller');
var housesController =  require('./controllers/houses_controller');


app.get('/', function(request, response){
response.render("./index");
})


app.use('/students', studentsController);
app.use('/houses', housesController);


app.listen(port, function () {
  console.log(`App is listening on port ${port}`);
})



