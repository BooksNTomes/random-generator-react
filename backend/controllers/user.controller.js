import User from "../models/user.model.js";
import { validUser } from "../services/user.services.js";

// TODO:
export const getUser = async (req, res) => {
    const {id} = req.params;

    const {name, password} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Generator ID"});
    }
}