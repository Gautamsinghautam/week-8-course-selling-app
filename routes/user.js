// const express=require("express");
const { Router}=require("express");
const userRouter=Router();


userRouter.post("/signup",function(req,res){

    res.json({message: "signup endpoint"})
})

userRouter.post("/signin",function(req,res){

    res.json({message: "Signin endpoint"})
})

userRouter.get("/purchange",function(req,res){

    res.json({message: "see purchansed endpoint"})
})

module.exports={
    userRouter: userRouter
}