import Generator from "../models/generator.model.js";
import { validGenerator } from "../services/generator.services.js";
import mongoose from "mongoose";

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

export const getGenerator = async (req, res) => {
    const {id} = req.params;

    const generator = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Generator ID"});
    }

    try {
        const generator = await Generator.findById(id);
        res.status(200).json({success: true, data: generator});
    }
    catch (error) {
        console.log("Error in get Generator: ", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }

}

export const createGenerator = async (req, res) => {
    console.log(req.body);
    const generator =  req.body;

    if (!validGenerator(generator)){
        return res.status(404).json({success: false, message: "Error in validating generator's Type with List and Validation"});
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

    // TODO: add validator again

    try {
        const updatedGenerator = await Generator.findByIdAndUpdate(id, generator, {new:true});
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