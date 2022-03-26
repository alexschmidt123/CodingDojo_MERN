const mongoose = require('mongoose');

    
//use mongoose to create a table (aka collection, aka model). Below are just the instructions for creating a table 
const NinjaSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required!"],
        minlength: [2, "First name must be at least 2 characters long!"]
    },
    age: {
        type: Number,
        required: [true, "Age is required!"],
        min: [18, "You must be an adult to join this coding bootcamp!"]
    },
    isVeteran: {
        type: Boolean,
    },

    profilePicUrl: {
        type: String,
        required: [true, "We need a profile picture!"]
    },
    },
    {timestamps:true}
)


//register the table instructions above to be use as a table in mongodb
const Ninja = mongoose.model('Ninja', NinjaSchema);
 
module.exports = Ninja;





