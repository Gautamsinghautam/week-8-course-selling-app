const {Router}=require("express");
const adminRouter=Router();

// adminRouter.use(adminMiddleware);

adminRouter.post("/signup",function(req,res){

    res.json({message: "signup endpoint"});
})

adminRouter.post("/signin",function(req,res){

    res.json({message: "sign in endpoint postEndpoint"});
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