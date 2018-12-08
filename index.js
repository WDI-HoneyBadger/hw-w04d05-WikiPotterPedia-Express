var express = require('express');
var mustache = require('mustache-express');

var studentController = require("./controllers/student_controller");
var houseController = require("./controllers/house_controller");

// app specific variables
var app = express();
var port = 3000;

// configuring mustache to be our view engine
app.engine('html', mustache());
app.set('view engine', 'html');

app.set('views', __dirname + '/views');


// set up home route
app.get('/', function(request, response){
  response.render("./index.html");
})

app.use("/students", studentController);
app.use("/houses", houseController);

// set up our app to listen to a port
app.listen(port, function() {
  console.log(`App is listening on port ${port}`);
})