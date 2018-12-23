var express = require('express');
var router = express.Router();

var harrypotter = require('../modules/harrypotter');

// routes

router.get('/', function(request, response){

var hosesss = harrypotter.map(function (item) {
	return item.house;
});

var houseLists = hosesss.filter(function(item, index){
	return hosesss.indexOf(item) >= index;
});
var mustacheDat = {
  harryPotte: houseLists
}
console.log(mustacheDat)

  response.render('./houses/index', mustacheDat);
})


router.get('/:house', function(request, response){
  var houses = request.params.house; 
    var harrypotterh = harrypotter.filter(function (item) {
      if(item.house === houses ){
      return item

      }
    })
  console.log(harrypotterh)
  var mustacheData = {
    housee: harrypotterh
  }
  console.log(mustacheData)
  response.render('./houses/show', mustacheData);
})







module.exports = router;