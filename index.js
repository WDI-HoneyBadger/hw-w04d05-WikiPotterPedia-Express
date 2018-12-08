var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;


app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


var studentControllers = require('./controllers/students_controller')
var houseControllers = require('./controllers/houses_controller');

app.get('/', function(request, response){
    response.render('./index')
});

app.use('/students', studentControllers);
app.use('/houses', houseControllers);



app.listen(port, function(){
    console.log(`App is listening on port ${port}`);
})