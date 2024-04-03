require('dotenv').config(); 
const express = require("express");
const Routes = express.Router();
const bodyParser = require("body-parser");
const UserModel = require("../model/schema");
const DishesModel = require('../model/dishes')
const cors = require('cors');
const Joi = require('joi');
const jwt = require('jsonwebtoken');


// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    // Get token from cookies, headers, or query parameters
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1] || req.query.token;

    if (!token) {
        return res.status(401).json({ error: 'Token is missing.' });
    }

    try {
        // Verify token and decode its payload
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // Attach decoded user information to request object
        req.user = decoded;
        next(); // Call next middleware or route handler
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token.' });
    }
};

// Apply CORS middleware
Routes.use(cors());

// Apply bodyParser middleware to parse JSON bodies
Routes.use(bodyParser.json());

// Define user creation schema using Joi
const createUserSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().alphanum().required(),
    age: Joi.number().integer().min(1).max(100).required()
});

const createDishesSchema = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    created_by: Joi.string().required()
});

// GET route to fetch all users (Example of unprotected route)
Routes.get("/getUsers", async(req, res) => {
    await UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

Routes.get("/getDishes", async(req, res) => {
    await DishesModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

// GET route to fetch a specific user by ID (Example of protected route)
Routes.get('/getUsers/:id', verifyToken, async(req, res) => {
    const id = req.params.id;
    await UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
});



// POST route for user creation (Example of unprotected route)
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

Routes.post('/createDishes', async (req, res) => {
    const { error } = createDishesSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const newdish = await DishesModel.create(req.body);
        res.json(newdish);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Internal server error');
    }
});

// POST route for user login (Example of unprotected route)
Routes.post('/loginUser', async (req, res) => {
    const { username, password } = req.body;

    try {
        // To find the user by username
        const user = await UserModel.findOne({ username });

        // To check if the user exists and if the password matches
        if (!user || user.password !== password) {
            // Return 401 Unauthorized if username or password is incorrect
            return res.status(401).json({ error: "Username or password is incorrect." });
        }
        
        // If the user exists and the password matches, generate JWT token
        const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' }); 
        
        // Set the token as a cookie
        res.cookie('token', token, { expiresIn: '7d', httpOnly: true }); 
        
        // Return success message along with the token
        res.status(200).json({ message: "User logged in successfully.", token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong. Please try again later." });
    }
});

// PUT route to update a specific user by ID 
Routes.put("/updateUser/:id", verifyToken, async (req, res) => {
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

// DELETE route to delete a specific user by ID 
Routes.delete("/deleteUser/:id", verifyToken, (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
});

module.exports = Routes;
