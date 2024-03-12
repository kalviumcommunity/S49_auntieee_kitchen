const express = require("express");
const Routes = express.Router();
const bodyParser = require("body-parser");
const UserModel = require("../model/schema");
const cors = require('cors');
//to access the server side in out frontend 
Routes.use(cors());

// to pass the dat in the json format
Routes.use(bodyParser.json());

Routes.get("/getUsers", async(req, res) => {
    await UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

//GET request
Routes.get('/', (req, res) => {
    try {
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



Routes.get('/getUsers/:id', async(req, res) => {
    const id = req.params.id;
    await UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

Routes.put("/updateUser/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        id,
        {
          username: req.body.username,
          email: req.body.email,
          age: req.body.age,
        },
        { new: true }
      );
      res.json(updatedUser);
    } catch (error) {
      res.json(error);
    }
  });

// DELETE request
Routes.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
});

module.exports = Routes