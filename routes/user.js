// const express=require("express");
const { Router}=require("express");
const userRouter=Router();
const {userModel}=require("../db");
const jwt=require("jsonwebtoken");
const JWT_USER_PASSWORD="gautam12345"; //todo : put in env variable

userRouter.post("/signup",async function(req,res){
    const {email, password, firstname, lastName} = req.body; //todo: adding zod validation
//TODO: has the password so plaintex  pw is not stored in DB
//TODOD; put inside trycatch
try{
    await userModel.create({
        email: email,
        password: password,
        firstname: firstname,
        lastName: lastName
    })
    }catch(e){
        console.log("ur signup failed"+ e);
    }
    res.json({message: "signup endpoint"})
})

userRouter.post("/signin",async function(req,res){
    const {email, password}=req.body;
    //TODO: ideally passsword syhou,d be hashed so that passowrd should be 
    const user=await userModel.findOne({
        email: email,
        password: password
    });
    if(user){
        //generate token and send
        const token=jwt.sign({id: user._id},JWT_USER_PASSWORD);
        //todo Do cookie logibc
        res.json({token: token});
    }else{
        res.status(403).json({message: "incorrect credentials"});
    }

})

userRouter.get("/purchange",function(req,res){

    res.json({message: "see purchansed endpoint"})
})

module.exports={
    userRouter: userRouter
}