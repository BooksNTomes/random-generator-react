import Rogelement from "../models/rogelement.model";
import { validRogelement } from "../services/rogelement.services";

export const getRogelements = async (req, res) => {
    try{
        const rogelements = await Rogelement.find({});
        res.status(200).json({success: true, data: rogelements})
    }
    catch (error) {
        console.log("Error in get Rogelements: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const createRogelement = async (req, res) => {

    const rogelement =  req.body;

    if (!validRogelement(rogelement)){
        return res.status(400).json({success: false, message: "Please provide all required details"});
    }

    const newRogelement = new Rogelement(rogelement);

    try{
        await newRogelement.save();
        res.status(201).json({success: true, data: newRogelement});
    } catch (error) {
        console.log("Error in create Rogelement: ", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
};

export const updateRogelement = async (req, res) => {
    const {id} = req.params;

    const rogelement = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Rogelement ID"});
    }

    try {
        const updatedRogelement = await Product.findByIdAndUpdate(id, rogelement, {new:true});
        res.status(200).json({success: true, data: updatedRogelement});
    }
    catch (error) {
        console.log("error in update Rogelement: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const deleteRogelement = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Rogelement ID"});
    }

    try {
        await Rogelement.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Rogelement Deleted"});
    }
    catch (error) {
        console.log("Error in delete Rogelement: ", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
};