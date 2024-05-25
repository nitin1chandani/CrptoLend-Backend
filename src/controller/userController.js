import User from "../models/UserModel.js";

export async function createUser(req, res, next){
    try{
        const {name, age, employementStatus, dateOfBirth, address, country, walletPublicAddress} = req.body;

        if(!name || !age || !employementStatus || !address || !country || !walletPublicAddress){
            return res.status(400).json({
                message: "Missing Required User Information."
            })
        }

        const newUser = new User({
            name,
            age,
            employementStatus,
            dateOfBirth,
            address,
            country,
            walletPublicAddress,
          });

        const savedUser = await newUser.save();

        res.status(201).json({ message: "User created successfully!", user: savedUser });
    }
    catch(error){
        console.error("Error creating user:", error);
        if (error.name === "MongoError" && error.code === 11000) {
        return res.status(400).json({ message: "Duplicate wallet address detected." });
        }
        res.status(500).json({ message: "Internal server error." });
        }
}
