var express = require("express");
var app = express();


//app config

app.set("view engine", "ejs");


app.get("/", function(req,res)
{
    //res.send("Home Page");
    res.redirect("/login");
});

app.get("/login" , function(req,res)
{
    res.render("login");
});

app.get("/register" , function(req,res)
{
    res.render("register");
});

app.post("/viewpage", function(req,res)
{
   // res.send("In viewpage");
   res.render("viewpage");
})

app.listen(process.env.PORT,process.env.IP, function(req,res)
{
    console.log("Start your goals");
});