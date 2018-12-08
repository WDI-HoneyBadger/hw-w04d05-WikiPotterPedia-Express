var express = require('express');
var router = express.Router();
var data = require('../data/data');



router.get('/', function(request, response){
    var mustacheData = {
       dataList: data
    };

    response.render('./houses', mustacheData);
})


router.get('/:name', function(request, response){
    var dataName = request.params.name;
    var data = require('../data/data');
    var studentHouse = data.filter(function(sHouse){
        return sHouse.house == dataName;
    )}
    var mustacheData = {
        dataList: studentHouse
    };

    response.render('./house', mustacheData);
    //console.log(mustacheData);
})


module.exports = router;
