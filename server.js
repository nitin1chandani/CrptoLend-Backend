import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.connect("mongodb+srv://nitin1chandani:root@cluster0.sf8pfkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Database connected");
})

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})