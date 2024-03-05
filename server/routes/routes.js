import express from "express";
const routes = express.Router();


//GET request
routes.get('/', (req, res) => {
    try {
        res.status(200).json({"message": "all good"});
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default routes