import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type: Number,
        required: true,
        min: 18,
        validate:{
           validator: (value)=>value>=18,
           message: "Age must be at least 18 years old."
        } 
    },
    employementStatus:{
        type: String,
        required: true,
        enum:["student", "fulltime", "parttime", "freelance", "unemployed", "selfemployed"]
    },
    dateOfBirth: {
        type: Date,
        required: false, 
    },
    address: {
        type: String,
        required: true
    },
    country:{
        type:String,
        required: true
    },
    walletPublicAddress:{
        type:String,
        required: true,
        unique: true
    }

})

export default mongoose.model("User", userSchema);