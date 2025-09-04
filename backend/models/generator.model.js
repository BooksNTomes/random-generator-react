import mongoose from 'mongoose';

const generatorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    // Just add validations for these
    type:{
        type: String,
        required: true,
    },
    list:{
        type: [String],
        required: false
    },
    validation:{
        type: String,
        required: false
    },
    published:{
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

const Generator = mongoose.model("Generator", generatorSchema);

export default Generator;