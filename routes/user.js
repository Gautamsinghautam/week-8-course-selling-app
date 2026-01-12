// const express=require("express");
const { Router}=require("express");
const userRouter=Router();


app.post("/signup",function(req,res){

    res.json({message: "signup endpoint"})
})

app.post("/signin",function(req,res){

    res.json({message: "Signin endpoint"})
})

app.get("/purchange",function(req,res){

    res.json({message: "see purchansed endpoint"})
})

module.exports={
    userRouter: userRouter
}