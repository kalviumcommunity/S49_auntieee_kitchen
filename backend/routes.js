const express = require('express');
const router = express.Router();
const data = require("./dummydata.json")

//GET request
router.get('/data', (req, res) => {
    try {
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//POST request
router.post('/data', (req, res) => {
    try {
        const newItem = { id:req.body.id, name: req.body.name, email: req.body.email };
        data.push(newItem);
        res.status(201).json(newItem);
        }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//PUT request
router.put('/data/:id', (req, res) => {
        const itemId = parseInt(req.params.id);
        const updatedItem = { name: req.body.name, email: req.body.email };
        const itemIndex = data.findIndex(item => item.id === itemId);

    // If the item is found, update it; otherwise, return a 404 response
    
    if (itemIndex !== -1) {
        data[itemIndex] = { ...data[itemIndex], ...updatedItem };
        res.json(data[itemIndex]);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
    
});

//DELETE request
router.delete("/data/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    let itemIndex = itemId - 1;
    if (itemIndex !== -1) {
        let x = data.splice(itemIndex, 1);
        res.send({ message: 'Item deleted successfully' ,data: x})
    }
});
  

module.exports = router;
