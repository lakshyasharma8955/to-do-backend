const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema
    ({
        text: 
        {
            type: String,
            require:true
        }
    })

const todomodel = mongoose.model('todo', todoSchema);

module.exports = todomodel;