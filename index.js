var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;
var harryPotterController = require('./controller/harryPotter-controller');
var housesController = require('./controller/houses-controller')

app.engine('html',mustache());
app.set('view engine','html');
app.set('views',__dirname+'/views')

app.use('/students',harryPotterController)
app.use('/houses',housesController)

app.get('/',function(request,response){
    response.render('./index')
})


app.listen(port,function(){
    console.log(`app listen to port ${port}`)
});