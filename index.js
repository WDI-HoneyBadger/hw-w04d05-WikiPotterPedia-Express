var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;

app.engine('html', mustache()); 
app.set('view engine', 'html');
app.set('views'. __dirname + '/views');

var studentController = require('./controllers/student_controller');
var houseController = require('./controllers/house_controller');

app.get('/', function(request, response){
    response.render('./index');
})

app.use('/students', studentController);
app.use('/houses', houseController);

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
    console.log(`App is listening on port ${port}`);
});