var express = require('express');
var router = express.Router();
var data = require('../data/data');

router.get('/', function(request,response){

    var mustacheData = {
        dataInfo : data
    }

    response.render('./students/index' , mustacheData);

})

router.get('/:id' , function(request,response){
    var index = request.params.id;
    mustacheData = {
        thatActor: data[index],
    }

    response.render('./students/show' , mustacheData);
})
module.exports = router;