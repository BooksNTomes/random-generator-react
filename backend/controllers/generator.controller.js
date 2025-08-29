import Generator from "../models/generator.model.js";
import { validGenerator } from "../services/generator.services.js";

export const getGenerators = async (req, res) => {
    try{
        const generators = await Generator.find({});
        res.status(200).json({success: true, data: generators})
    }
    catch (error) {
        console.log("Error in get Generators: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const createGenerator = async (req, res) => {

    const generator =  req.body;

    if (!validGenerator(generator)){
        return res.status(400).json({success: false, message: "Please provide all required details"});
    }

    const newGenerator = new Generator(generator);

    try{
        await newGenerator.save();
        res.status(201).json({success: true, data: newGenerator});
    } catch (error) {
        console.log("Error in create Generator: ", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
};

export const updateGenerator = async (req, res) => {
    const {id} = req.params;

    const generator = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Generator ID"});
    }

    try {
        const updatedGenerator = await Product.findByIdAndUpdate(id, generator, {new:true});
        res.status(200).json({success: true, data: updatedGenerator});
    }
    catch (error) {
        console.log("error in update Generator: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const deleteGenerator = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Generator ID"});
    }

    try {
        await Generator.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Generator Deleted"});
    }
    catch (error) {
        console.log("Error in delete Generator: ", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
};