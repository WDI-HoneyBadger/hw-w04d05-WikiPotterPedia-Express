var express = require('express');
var router = express.Router();
var data = require('../data/data');

router.get('/' , function (request , response){
    var mustacheData = {
        houseList :data
    }
    response.render('./houses/index3' , mustacheData)
})

router.get('/:id', function(request, response){
    var houseName = request.params.id;

    var studentHouse = data.filter(function(selection){
        if (selection.house == houseName){
            return selection;
        };
    })
    var mustacheData = {
        studentList: studentHouse
    }
    response.render('./houses/show', mustacheData);
})
