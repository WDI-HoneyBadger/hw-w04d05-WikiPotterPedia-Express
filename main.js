var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;

app.engine('html', mustache());
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

var studentsController = require('./controllers/studentsController');
var housesController = require('./controllers/housesControllers');

app.get('/', function(req, res){
    res.render('./');
    // res.send('test');
})

app.use('/students', studentsController);
app.use('/houses', housesController);

app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
  })