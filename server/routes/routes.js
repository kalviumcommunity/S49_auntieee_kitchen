const express = require("express");
const Routes = express.Router();
const bodyParser = require("body-parser");
const UserModel = require("../model/schema");
const cors = require('cors');
Routes.use(cors());

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

// POST request
Routes.post('/data', (req, res) => {
    // console.log(req.body)
    try {
        const newItem = {
            id: data.length + 1, 
            username: req.body.username,
            email: req.body.email,
            age: req.body.age
        };
        data.push(newItem);
        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT request
Routes.put('/data/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedItem = {
        username: req.body.username,
        email: req.body.email,
        age: req.body.age
    };
    const itemIndex = data.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
        // Update the existing item with the new data
        data[itemIndex] = { ...data[itemIndex], ...updatedItem };
        res.json(data[itemIndex]);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

// DELETE request
Routes.delete("/data/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const itemIndex = data.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
        // Remove the item from the array
        const deletedItem = data.splice(itemIndex, 1)[0];
        res.send({ message: 'Item deleted successfully', data: deletedItem });
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});



module.exports = Routes