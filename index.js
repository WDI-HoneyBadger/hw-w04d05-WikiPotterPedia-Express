var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;

var stundentsController = require('./controllers/students_controllers');
var housesController = require('./controllers/houses_controller');

app.set('view engine','html');
app.engine('html', mustache());

app.set('views', __dirname + '/views');
app.use('/students', stundentsController);
app.use('/houses', housesController);



app.get('/',function(request,response){

    response.render('index');
})


app.listen(port,function(){

    console.log(`App is listening on port ${port}`);
})