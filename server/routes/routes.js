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

Routes.post('/createUser', async (req, res) => {
  const { error } = createUserSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { username } = req.body;

  try {
      // Check if the username already exists
      const existingUser = await UserModel.findOne({ username });
      if (existingUser) {
          return res.status(409).send('Username already exists');
      }

      // If the username doesn't exist, create the new user
      const newUser = await UserModel.create(req.body);
      res.json(newUser);
  } catch (err) {
      console.error(err);
      return res.status(500).send('Internal server error');
  }
});

// POST route for user login
Routes.post('/loginUser', async (req, res) => {
  const { username, password } = req.body;

  try {
      // Find the user by username
      const user = await UserModel.findOne({ username });

      // Check if the user exists and if the password matches
      if (!user || user.password !== password) {
          // Return 401 Unauthorized if username or password is incorrect
          return res.status(401).json({ error: "Username or password is incorrect." });
      }
      
      // If the user exists and the password matches, set the cookie and redirect to the landing page
      res.cookie('username', username, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true }); // Set the cookie to last for 7 days
      res.status(200).json({ message: "User logged in successfully." });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
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