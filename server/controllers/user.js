import {UserModel} from "../models/UserModel.js";
import {PostModel} from "../models/PostModel.js";
import crypto from "crypto";
import https from 'https';
import axios from 'axios';

export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({_id: req.body._id})
        const post = await PostModel.find({"author._id": req.body._id})
        const booked = await PostModel.find({"authorBooked._id": req.body._id})
        res
            .status(200)
            .json({user, post, booked});
    } catch (err) {
        res
            .status(500)
            .json({error: err})
    }
};

export const updateUser = async (req, res) => {
    try {
        const updateUser = req.body;
        const user = await UserModel.findOneAndUpdate({
            _id: updateUser._id
        }, updateUser, {new: true})
        await user.save();

        res
            .status(200)
            .json(user);
    } catch (err) {
        res
            .status(500)
            .json({error: err})
    }
};

export const banUser = async (req, res) => {
    try {
        const updateUser = req.body;

        const user = await PostModel.findOneAndUpdate({
            _id: updateUser._id
        }, updateUser, {new: true})
        await user.save();

        res
            .status(200)
            .json(user);
    } catch (err) {
        res
            .status(500)
            .json({error: err})
    }
};

export const payment = async (req, res) => {
    const dataUser = req.body;
    var partnerCode = "MOMOHR3I20220105";
    var accessKey = "klHGginNAS7FvMvf";
    var secretKey = "KkADkoGaG9Wj5s2zintx9brAAtlZwan2";
    var requestId = partnerCode + new Date().getTime();
    var orderId = requestId;
    var orderInfo = "Thanh toan Qua Giang App";
    var redirectUrl = "https://momo.vn/";
    var ipnUrl = "https://momo.vn/";
    var amount = 100000;
    var requestType = "captureWallet";
    var extraData = "";
    var rawSignature = "accessKey=" + accessKey + "&amount=" + amount +
            "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&ord" +
            "erInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" +
            redirectUrl + "&requestId=" + requestId + "&requestType=" +
            requestType;

    var signature = crypto
        .createHmac("sha256", secretKey)
        .update(rawSignature)
        .digest("hex");

    const data = {
        partnerCode,
        requestId,
        amount,
        orderId,
        orderInfo,
        redirectUrl,
        ipnUrl,
        extraData,
        requestType,
        signature,
        lang: "en"
    };

    try {
        const response = await axios.post(
            'https://test-payment.momo.vn/v2/gateway/api/create',
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        if (response.data) {
            const updateUser = req.body;
            const user = await UserModel.findOneAndUpdate({
                _id: updateUser._id
            }, {
                money: updateUser.money - -100000
            }, {new: true})
            await user.save();

            res
                .status(200)
                .json(
                    response.data
                        ?.payUrl
                );
        }
    } catch (error) {
        res
            .status(500)
            .json({error: error})
    }
};
