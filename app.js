var express = require("express");
var app = express();



app.get("/", function(req,res)
{
    res.send("Home Page");
});

app.listen(process.env.PORT,process.env.IP, function(req,res)
{
    console.log("Start your goals");
});