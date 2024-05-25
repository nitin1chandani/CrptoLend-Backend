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
           validate: (value)=>value>=18,
           message: "Age must be at least 18 years old."
        } 
    },
    employmentStatus:{
        type: String,
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
    }

})

export default mongoose.model("User", userSchema);