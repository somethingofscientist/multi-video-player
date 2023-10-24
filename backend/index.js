import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import MyDB from './DB/MyDb.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());


MyDB();
app.listen(PORT, () => {
    console.log(`Server is calling at ${PORT} 📫`)
})