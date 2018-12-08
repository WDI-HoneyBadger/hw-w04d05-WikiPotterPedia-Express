var  express = require ('express');
var mustache = require ('mustache-express');
var port = 3000;
var app = express();



//var css = require('css');
//var obj = css.parse('body { font-size: 12px; }', options);
//css.stringify(obj, options);

app.use(express.static('public'));

app.engine('html',mustache());

app.set('view engine', 'html');
app.set('views',  __dirname + '/views');
//app.set(express.static(path.join(__dirname, '/public')));

var harryPotterController = require('./controllers/harryPotterController');
var housesController = require('./controllers/housesController');



//app.get('/css/styles.css', function(req, res)
//{ res.send('css/styles.css'); res.end(); });

app.get('/',function (request, response){

    response.render('./index');

});

app.use('/students', harryPotterController);
app.use('/houses', housesController);

app.listen(port, function() {
    console.log(`App is listening on port ${port}`);
  });


  //module.exports = router;