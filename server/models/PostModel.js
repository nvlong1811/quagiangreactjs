import mongoose from "mongoose";

const schema = new mongoose.Schema({
    positions: {
        from : {
            lat: {
                type: Number,
                required: true
            },
            lng: {
                type: Number,
                required: true
            },
            label: {
                type: String,
                required: true
            }
        },
        to : {
            lat: {
                type: Number,
                required: true
            },
            lng: {
                type: Number,
                required: true
            },
            label: {
                type: String,
                required: true
            }
        }
    },
    note: {
        type: String,
        required: true
    },
    findDrive: {
        type: Boolean,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    money: {
        type: Number,
        required: true,
    },
    author: {
        _id : {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    },
    authorBooked: {
        _id : {
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: false,
        }
    }
}, {timestamps: true});

export const PostModel = mongoose.model('Post', schema)