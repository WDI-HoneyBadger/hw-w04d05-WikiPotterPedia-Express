var express = require('express');
var router = express.Router();

var data = require('../data/data');

router.get('/', function(request, response) {
    var mustacheVariables = {
        studentsList: data
    }
    response.render('./students/index',mustacheVariables);
})

router.get('/:id', function(request,response){
    var getID = request.params.id;
    var mustacheVariables = {
        studentData: data[getID],
        studentHouse: data[getID].house.toLowerCase()
    }
    response.render('./students/show', mustacheVariables);
})

module.exports = router;