const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const req = require('express/lib/request');
const { urlencoded } = require('body-parser');

const app = express();

var items = ["lala"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    res.render("list",{kindOfDay:day, Task: items});
});

app.post("/", function(req,res){
    var item = req.body.newItom;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("started server");
})