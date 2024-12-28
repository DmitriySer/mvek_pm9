const express = require('express');
const cors = require('cors');
require('dotenv').config({path: '../.env'});
const app = express();

const apiRoutes = require('./routes/api');

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});


