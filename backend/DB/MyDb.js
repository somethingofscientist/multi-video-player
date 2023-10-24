import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const URI = process.env.URI;

const MyDB = async (req, res) => {
    try {
        mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected DB 🐲');
    }
    catch (error) {
        console.log('Error Here', res)
    }
}

export default MyDB;