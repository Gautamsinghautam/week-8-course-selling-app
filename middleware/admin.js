const {JWT_ADMIN_PASSWORD}=require("../config");

function adminMiddleware(req,res,next){
    const token=req.header.token;
    const decode=jwt.verify(token,JWT_ADMIN_PASSWORD);

    if(decode){
        req.adminId=decode.indexOf;
        next();
    }else{
        res.status(403).json({
            message: "You r not signed in user middleware"
        })
    }
}
module.exports={
    adminMiddleware: adminMiddleware
}