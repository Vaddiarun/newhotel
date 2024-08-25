import mongoose from 'mongoose';

const stockschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
   quantity: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
   
},{timestamps:true})

const stock = mongoose.model("Stock", stockschema);

export default stock;