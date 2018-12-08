var express = require('express');
var router = express.Router();

var houses = require('../data/data')

var fourHouses = [{
    name: 'Gryffindor'
}, 
{
    name: 'Hufflepuff'
}, 
{
    name: 'Ravenclaw'
}, 
{
    name: 'Slytherin'
}]

router.get('/', function(request, response){
        var mustacheVariables = {
            houseList: fourHouses,
            
        }
    
    response.render('./houses/houses_index', mustacheVariables);
})

router.get('/:id', function(request, response){
    var houseName = request.params.id;
    var house = houses.filter(function(houseN){
        if(houseN.house == houseName)
        {
            return houseN
        }
        
    })
   
    var mustacheVariables = {
        studentList: house,
        houseName: house[0].house
    }

response.render('./houses/houses_show', mustacheVariables);
})


module.exports = router;