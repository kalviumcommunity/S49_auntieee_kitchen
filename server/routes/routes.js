const express = require("express");
const Routes = express.Router();

//GET request
Routes.get('/', (req, res) => {
    try {
        res.json("sdsd");
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = Routes