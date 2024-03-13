const express = require("express");
const Routes = express.Router();
const bodyParser = require("body-parser");
const UserModel = require("../model/schema");
const cors = require('cors');
const Joi = require('joi');

//to access the server side in out frontend 
Routes.use(cors());

// to pass the dat in the json format
Routes.use(bodyParser.json());

const createUserSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().alphanum().required(),
    age: Joi.number().integer().min(1).max(100).required()
});


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

// POST request
Routes.post('/createUser', async(req, res) => {
    const { error } = createUserSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    await UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => console.log(err))
});


Routes.get('/getUsers/:id', async(req, res) => {
    const id = req.params.id;
    await UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

//PUT request
Routes.put("/updateUser/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        id,
        {
          username: req.body.username,
          password: req.body.password,
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