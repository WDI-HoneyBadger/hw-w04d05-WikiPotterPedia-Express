var express = require('express');
var mustache = require('mustache-express');
var port = 3000;
var app = express();

app.engine('html' , mustache());
app.set('view engine' , 'html');
app.set('views' , __dirname +'/views');

var studentsController = require('./controllers/studentsController');
var housesController = require('./controllers/housesController');

app.use('/students' , studentsController);
app.use('/houses' , housesController);

app.get('/' , function(request , response){
    response.render('index');

})

app.listen(port , function (){
    console.log('This port works')
})
