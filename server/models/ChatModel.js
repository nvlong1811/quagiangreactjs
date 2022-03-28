import mongoose from "mongoose";

const schema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },

    send: {
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    recieve: {
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },

}, {timestamps: true});

export const ChatModel = mongoose.model('Chat', schema)