import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'is invalid'],
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    cartData: {
        type: Object,
        default: {},
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userSchema);

export default User;
