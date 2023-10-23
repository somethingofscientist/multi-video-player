const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');

const app = express();

app.listen (() => {
    console.log(`Server is running at ${PORT} 🎉`)
})