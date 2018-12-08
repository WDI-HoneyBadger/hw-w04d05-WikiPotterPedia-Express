//require our dependence 
var express = require('express');
var router = express.Router();
var harry = require('../data/data')

router.get('/', function(request, response){
    var Student = {
        list: harry
    };
    response.render('./student', Student);
})

router.get('/:id', function(request, response){
    var studentid = request.params.id;
    var Student = {
        list: harry[studentid]
    };
    response.render('./studentid', Student);
})



// 

module.exports = router;