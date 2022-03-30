const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Title should be longer than 3!"],
        maxlength: [20, "Title should be shorter than 20!"]
    },
    price: { 
        type: Number,
        required: [true, "Price is required!"],
        min: [0, "Price can not be less than 0!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [5, "Description can not be shorter than 5!"]
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);






