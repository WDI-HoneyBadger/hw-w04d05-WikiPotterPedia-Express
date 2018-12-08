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
console.log(houseLists)
var mustacheDat = {
  harryPotte: harrypotter

}
  response.render('./houses/house', mustacheDat);
})



router.get('/:name', function(request, response){
  var houseId = request.params.name;  

  var mustacheData = {
    house: harrypotter
  }
  response.render('./houses/houseshow', mustacheData);
})




module.exports = router;