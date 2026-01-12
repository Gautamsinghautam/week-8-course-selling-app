const express=require("express");
const app=express();
const port=3000;

app.post("/user/signup",function(req,res){
    
    res.json({message: "signup endpoint"})
})

app.post("/user/signin",function(req,res){

    res.json({message: "Signin endpoint"})
})

app.get("/user/purchange",function(req,res){

    res.json({message: "see purchansed endpoint"})
})
app.post("/user/purchase",function(req,res){

    res.json({message: "can purchanse postEndpoint"})
})
app.get("/courses",function(req,res){

    res.json({message: "see courses details getEndpoint"});
})
app.listen(3000);