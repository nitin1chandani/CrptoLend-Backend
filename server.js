import express from "express";
import mongoose from "mongoose";
import userRouter from "./src/routes/userRoutes.js";
const app = express();

app.use(express.json());
mongoose.connect("mongodb+srv://nitin1chandani:root@cluster0.sf8pfkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Database connected");
})

app.use('/api/v1/user', userRouter);

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})