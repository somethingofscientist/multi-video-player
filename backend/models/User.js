import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ['Name is required ...', true],
        unique: true,
    },
    email: {
        type: String,
        required: ['Email is required ...', true],
        unique: true,
    },
    password: {
        type: String,
        required: ['Password is required ...', true]
    },
    img: {
        type: String,
        default: "",
    },
    subscribers: {
        type: Number,
        default: 0,
    },
    subscribedUser: {
        type: [String],
        // default: 0,
    }
}, { timestamps: true });

export default mongoose.model("Users", UserSchema);