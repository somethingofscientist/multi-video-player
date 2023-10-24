import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: ['UserID is required ...', true],
    },
    title: {
        type: String,
        required: ['Video Title is required ...', true],
        unique: true,
    },
    desc: {
        type: String,
        required: ['Video Description is required ...', true],
    },

}, { timestamps: true });

export default mongoose.model("Users", VideoSchema);