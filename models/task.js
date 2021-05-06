//importing the moongoose
const mongoose = require('mongoose');


//creating a Schema
const taskSchema = mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    dropdown: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

//making a model of the schema to populate the database
const Task = mongoose.model('Task',taskSchema);

//exporting the module
module.exports = Task;