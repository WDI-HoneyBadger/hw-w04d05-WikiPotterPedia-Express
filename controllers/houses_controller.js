var express = require('express');
var router = express.Router();
var data = require('../data/data');

router.get('/',function(request,response){
    
    var mustacheData = {
        houses : data,
    }
        response.render('./houses/index',mustacheData);
})

router.get('/:house',function(request,response){
    var house = request.params.house;
    var filtering =  data.filter(function(elem){
        if(elem.house === house){
            //console.log(elem);
            return elem;
        }
    })
        mustacheData = {
         thatHouse : filtering,
           
            
        }

        response.render('./houses/show',mustacheData);
     
})



module.exports = router;   


    // var pplOfHouse = data.filter(function(elem){
    //     if(elem.keys === house){
    //         response.send(elem);
    //     }
    // })