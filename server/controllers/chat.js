import { ChatModel } from "../models/ChatModel.js";

export const getMessage = async (req, res) => {
    try {
        const message = await ChatModel.find({
            "send._id": {$in: [req.body._id1, req.body._id2 ]},
            "recieve._id": {$in: [req.body._id1, req.body._id2 ]}
        });
        res.status(200).json(message);
    } catch (err) {
        res.status(500).json({error: err})
    }
};

export const createMessage = async (req, res)=>{
    try {
        const newMessage = req.body;
        const message = new ChatModel(newMessage);
        await message.save();

        res.status(200).json(message)
    } catch (err) {
        res.status(500).json({error: err});
    }
};
