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
    },

    incomeSlab: {
        type: String,
        required: true,
        unique: false,
        enum:["$0 - $1,000",
        "$1,001 - $2,500",
        "$2,501 - $5,000",
        "$5,001 - $10,000",
        "$10,001 - $20,000",
        "$20,001 - above",
    ]


    }

})

export default mongoose.model("User", userSchema);