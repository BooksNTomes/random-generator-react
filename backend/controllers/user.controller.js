import User from "../models/user.model.js";
import { createNewUser, createToken, hashPassword, validPassword, validUser } from "../services/user.services.js";

// import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

// WIP

export const register = async (req,res) => {
    const user =  req.body;

    if (!validUser(user)){
        res.status(409).json({success:false, message: "Duplicate User"});
    }

    try{
        const username = user.name;
        const hash = hashPassword(user.password);
        createNewUser(username, hash);
        res.status(201).json({success: true, data: newUser});

    } catch (error) {
        console.log("Error in create User: ", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
}

export const login = async (req, res) => {
    const {id} = req.params;
    const {name, password} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid User ID, User Not Found"});
    }
    try {
        const user = await User.findOne({name:name});

        if (!validPassword(password, user.password)){
            return res.status(401).json({success: false, message:"Incorrect credentials"});
        }

        const token = createToken(user);

        res.status(200).json({
            success:true,
            message:"Login successful",
            token,
            user:{
                userID: user._id,
                name:user.name,
            }
        })
    }
    catch (err) {
        return res.status(400).json({success:false, message: "Internal Server Error"})
    }
}

export const logout = async (req, res) => {
    
}

export const authenticate = () => {

}

export const refresh = () => {

}