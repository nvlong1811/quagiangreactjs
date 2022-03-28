import mongoose from "mongoose";

const schema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    money: {
        type: String,
        required: true,
        default: 0
    },
    location: {
        label: {
            type: String,
            required: true,
            default: "Đà Nẵng"
        },
        id: {
            type: String,
            required: true,
            default: "DN"
        }
    },
    sex: {
        type: String,
        required: false,
    },
    age: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    }

}, {timestamps: true});

export const UserModel = mongoose.model('User', schema)