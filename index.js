require('./listener2');
var express= require("express");
var app=express();
var path=require("path");
var form=require('./server/routes/form');
var parser=require('body-parser');


app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"node_modules/bootstrap/dist/css")));
app.use(express.static(path.join(__dirname,"node_modules/bootstrap/dist/js")));
app.use(express.static(path.join(__dirname,"node_modules/jquery/dist")));

//all path starting with form will be routed to form.js
app.use(parser.urlencoded()); //intercepts the request and parses unlencoded http body 
app.use("/form",form);

app.set('views',path.join(__dirname,'public/templates'));//location of pug files
app.set('view engine','pug');//template engine we use 

app.get("/",function(request,response)
{
    response.send("Node Js is serving ---------");
});
app.get("/home",function(request,response)
{
    response.sendFile(path.join(__dirname,"public/html/home.html"));
});

app.get("/citypage",function(request,response)
{
    response.sendFile(path.join(__dirname,"public/html/home2.html"));
});

app.listen("4040", function(){
    console.log("server is started @4040");
})
