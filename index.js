const express=require("express");
const mongoose=require("mongoose");


const {userRouter}=require("./routes/user");
const {courseRouter}=require("./routes/course");
const {adminRouter}=require("./routes/admin");

const app=express();
app.use(express.json());

const port=3000;

app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/course",courseRouter);

async function main() {
    //use dot env to store this url
    await mongoose.connect("mongodb+srv://gautamsingh6006218_db_user:Singhautam1@cluster0.tqjgxxd.mongodb.net/coursera-app");
    app.listen(3000);
    console.log("listening to port 3000");
}
main();
