import Generator from "../models/user.model.js";
import { validGenerator } from "../services/user.services.js";

// TODO:
export const getGenerator = async (req, res) => {
    const {id} = req.params;

    const {name, password} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Generator ID"});
    }

}