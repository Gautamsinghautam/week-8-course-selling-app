const {Router}=require("express");
const adminRouter=Router();
const jwt=require("jsonwebtoken");
const {adminModel}=require("../db");
const JWT_ADMIN_PASSWORD="GautamAdimin";

// adminRouter.use(adminMiddleware);
//passsowrd hashing libraray Bcrypt ZOD(for ipn validation), json token for token generatioon
adminRouter.post("/signup",async function(req,res){
    
const {email, password, firstname, lastName} = req.body; //todo: adding zod validation
//TODO: has the password so plaintex  pw is not stored in DB
//TODOD; put inside trycatch
try{
    await adminModel.create({
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

adminRouter.post("/signin",async function(req,res){

    const {email, password}=req.body;
    //TODO: ideally passsword syhou,d be hashed so that passowrd should be 
    const admin=await adminModel.findOne({
        email: email,
        password: password
    });
    if(admin){
        //generate token and send
        const token=jwt.sign({id: admin._id},JWT_ADMIN_PASSWORD);
        //todo Do cookie logibc
        res.json({token: token});
    }else{
        res.status(403).json({message: "incorrect credentials"});
    }

})
adminRouter.post("/course",function(req,res){

    res.json({message: "course post endpoint "});
})
adminRouter.put("/course",function(req,res){

    res.json({message: "course put endpoint"});
})
adminRouter.get("/course/bulk",function(req,res){

    res.json({message: "course bulk getEndpoint"});
})
module.exports={
    adminRouter: adminRouter
}