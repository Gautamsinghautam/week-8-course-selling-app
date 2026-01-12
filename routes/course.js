const {Router}=require("express");
const courseRouter=Router();


app.post("/purchase",function(req,res){

    res.json({message: "can purchanse postEndpoint"})
})
app.get("/preview",function(req,res){

    res.json({message: "see courses details getEndpoint"});
})
module.exports={
    courseRouter: courseRouter
}