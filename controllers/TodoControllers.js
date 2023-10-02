const todomodel = require("../models/TodoModel");

// Get Text 

module.exports.getToDo = async (req, res) => {
  const toDo = await todomodel.find();
  res.send(toDo);
};

// Add Text

module.exports.saveToDo = async (req, res) => {
 
    const { text } = req.body

    todomodel.create({ text })
        .then((data) =>
        {
            console.log("Added Succesfully...");
            console.log(data);
            res.send(data);
    })
};

  // Update Text

module.exports.updateToDo = async (req,res) =>
{
    const { _id, text } = req.body
    todomodel.findByIdAndUpdate(_id, { text })
        .then(() => res.send("Updated Successfully..."))
    .catch((err)=> console.log(err))
}

// Delete Text

module.exports.deletetodo = async (req,res) =>
{
    const { _id } = req.body;
    todomodel.findByIdAndDelete(_id )
        .then(() => res.send('delete Successfully...'))
    .catch((err)=>console.log(err))
}