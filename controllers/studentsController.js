var express = require('express');
var router = express.Router();

var data = require('../data/data');

router.get('/' , function(request , response){
    var mustacheData = {
        StudentList : data ,
    }
    response.render('./students/index2' , mustacheData);
})

router.get('/id' , function(request , response){
    var studentId = request.params.id;
        var studentData = data[studentId];
        var mustacheData = {
            student : studentData
        }
        response.render('./students/show' ,mustacheData )
})
module.exports= router;