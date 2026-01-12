const {Router}=require("express");
const courseRouter=Router();


courseRouter.post("/purchase",function(req,res){

    res.json({message: "can purchanse postEndpoint"})
})
courseRouter.get("/preview",function(req,res){

    res.json({message: "see courses details getEndpoint"});
})
module.exports={
    courseRouter: courseRouter
}