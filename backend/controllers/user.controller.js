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

        const accessToken = createToken(user, {expiresIn: '15m'});
        const refreshToken = createToken(user, {expiresIn:'7d'})

        res.cookie("jwt", refreshToken, {
            httpOnly:true,
            sameSite:"lax",
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            success:true,
            message:"Login successful",
            credentials:{
                userID: user._id,
                name: user.name,
                token: accessToken
            }
        })
    }
    catch (err) {
        return res.status(400).json({success:false, message: "Internal Server Error"})
    }
}

export const logout = async (req, res) => {
    res.clearCookie("jwt", {
        httpOnly:true,
        secure:true,
        sameSite:"lax"
    });
    return res.status(200).json({success: true, message: "Logout Successful"})
}

export const refresh = () => {
    const cookies = req.cookies;

    if (!cookies?.jwt) res.status(401).json({success:false, message: 'No refresh token found'});

    const refreshToken = cookies.jwt;

    jwt.verify(refreshToken, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(401).json({success:false, message: 'Invalid refresh token found'});

        const accessToken = jwt.sign(
            {user_id: decoded.user_id,
            name: decoded.name},
            process.env.SECRET,
            {expiresIn: '15m'}
        );

        return res.json({accessToken})
    })

}

export const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({success:false, message: 'No token found'});

    const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.SECRET, (err, user) =>{
        if (err) res.status(401).json({success:false, message: 'Invalid token'});

        req.user = user;
        next();
    })
}