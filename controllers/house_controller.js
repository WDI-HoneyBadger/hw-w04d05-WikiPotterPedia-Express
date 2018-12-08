var express = require("express");

var router = express.Router();

var students = require("../data/data");

router.get("/", function (req, res) {
    var arr = [
        { name: "Gryffindor" },
        { name: "Hufflepuff" },
        { name: "Ravenclaw" },
        { name: "Slytherin" }
    ];
    var mustacheData = {
        houses: arr
    }
    res.render("./house_index.html", mustacheData);
})

router.get("/:name", function (req, res) {
    var houseName = req.params.name;
    var filteredStudents = students.filter(function(element){
        if (element.house == houseName) return element;
    })
    var mustacheData = {
        filtered: filteredStudents
    }
    res.render("./house_show.html", mustacheData);
})

module.exports = router;