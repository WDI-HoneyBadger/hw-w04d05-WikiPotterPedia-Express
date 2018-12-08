// Set up express
var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;


app.engine('html', mustache()); 
app.set('view engine', 'html');
app.set('views', __dirname + '/views')


var dataControllers = require('./controllers/data-controller');
var housesController = require('./controllers/house-contrroller');

app.get('/', function(request, response){
    response.render('./index');
  })

app.use('/data', dataControllers);
app.use('/houses', housesController);

app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
  })