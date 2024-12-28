const express = require('express');
const app = express();
const router = express.Router();
const connectDB = require('../db');

router.post('/services', async (req, res) => {
    try {
        const newUser = req.body;
        const clientDB = await connectDB();
        const db = clientDB.db('services');
        const result = await db.collection('list').insertOne(newUser);
        if (result) {
            res.json({
                success: true,
                newUser,
            });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});


module.exports = router;
