//require our dependence 
var express = require('express');
var router = express.Router();


var potter = require('../data/data')

router.get('/', function(request, response){
    var house = {
        list: potter
    };
    response.render('./house', house);
})

router.get('/:name', function(request, response){
    var houseid = request.params.name;
    
    
    var homes = potter.filter(function(home){
        return home.home == houseid
    });

    var house = {
        list: homes
    }

    response.render('./houseid', house);
});



// 

module.exports = router;