import mongoose from 'mongoose';

//TODO:
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema);

export default User;