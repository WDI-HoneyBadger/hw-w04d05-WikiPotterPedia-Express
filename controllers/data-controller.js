var express = require('express');
var router = express.Router();
var data = require('../data/data');



router.get('/', function(request, response){
    var mustacheData = {
       dataList: data
    };

    response.render('./data/index', mustacheData);
})
router.get('/', function(request, response){
    var mustacheData = {
       dataList: data
    };

    response.render('./data/houses', mustacheData);
})

router.get('/:id', function(request, response){
    var dataId = request.params.id;
   
    var mustacheData = {
        dataList: data[dataId]
    };

    response.render('./data/show', mustacheData);
    //console.log(mustacheData);
})
router.get('/:house', function(request, response){
    var dataHouse = request.params.house;
   
    var mustacheData = {
        dataList: data[dataHouse]
    };

    response.render('./data/house', mustacheData);
    //console.log(mustacheData);
})


module.exports = router;
