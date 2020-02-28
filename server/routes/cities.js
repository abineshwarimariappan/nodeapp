const route=require("express").Router();
const city=require("../db/schemas/city");
const country=require("../db/schemas/city");

route.get("/all",function(request,response){
    city.find({},{_id:0},function(err,data)
    {
        if(err)
        response.sendstatus(500);
        else
        response.json(data);
    });
});


route.get("/countries",function(request,response){
    country.find({},{_id:0},function(err,data)
    {
        if(err)
        response.sendstatus(500);
        else
        response.json(data);
    });
});


route.get("/all/:pattern",function(request,response){
    let pattern=request.params.pattern;
    city.find({name:{$regex:pattern, $options:'i'}},{_id:0},function(err,data)
    {
        if(err)
        response.sendstatus(500);
        else
        response.json(data);
    });
})

route.post("/add",function(request,response)
{
    city.insertMany(request.body,function(err,data)
    {
        if(err)
        response.status(500);
        else
        response.send("successfully added");
    })
});

route.get("/allcities/:pattern",function(request,response){
    let pattern=request.params.pattern;
    city.find({countrycode:pattern},{_id:0},function(err,data)
    {
        if(err)
        response.sendstatus(500);
        else
        response.json(data);
    });
})


module.exports=route;