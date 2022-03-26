const mongoose = require('mongoose');

    
//use mongoose to create a table (aka collection, aka model). Below are just the instructions for creating a table 
const ThingSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required!"],
        minlength: [2, "First name must be at least 2 characters long!"]
    }
    },
    {timestamps:true}
)


//register the table instructions above to be use as a table in mongodb
const Thing = mongoose.model('Thing', ThingSchema);
 
module.exports = Thing; //export the table(aka collection) so other files can access and query the db





