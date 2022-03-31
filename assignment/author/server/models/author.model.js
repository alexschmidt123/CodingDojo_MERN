const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name should be longer than 3!"],
        maxlength: [40, "Name should be shorter than 40!"]
    },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);






