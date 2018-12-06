// requiring dependencies
var express = require('express');
var mustache = require('mustache-express');

// app specific variables
var app = express();
var port = 3000;
var wikiStudent = require('./controller/wikiController');
var wikiHouse = require('./controller/housesController');


app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

 
app.get('/', function (request, respone){
    respone.render('./index')

});

//app links to the varibales
app.use('/students', wikiStudent)
app.use('/houses', wikiHouse);



// set up our app to listen to a port
app.listen(port, function() {
  console.log(`App is listening on port ${port}`);
});