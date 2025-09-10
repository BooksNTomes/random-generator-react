import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import User from '../models/user.models.js';
dotenv.config();

export const validUser = (user) => {
    const dupeUser = User.findOne({name:user.name});

    if (dupeUser){
        return false;
    }

    return true;
}

export const hashPassword = (user) => {
    return bcrypt.hash(user.password);
}

export const createNewUser = (username, hash) => {
    const newUser = new User({
        name: username,
        password: hash
    });
    newUser.save();
}