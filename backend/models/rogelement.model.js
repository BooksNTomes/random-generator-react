import mongoose from 'mongoose';

const rogelementSchema = new mongoose.Schema({
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
    //
    listType:{
        type: String,
        required: true,
    },
    list:{
        type: [String],
        required: false
    }
}, {
    timestamps: true
})

const Rogelement = mongoose.model("Rogelement", rogelementSchema);

export default Rogelement;