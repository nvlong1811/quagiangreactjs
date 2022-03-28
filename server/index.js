import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js'
import auth from './routers/auth.js'
import user from './routers/user.js'
import chat from './routers/chat.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.DATABASE_URL;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '300mb'}));
app.use(cors());

app.use('/auth', auth)
app.use('/posts', posts)
app.use('/user', user)
app.use('/chat', chat)

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('connect db success');
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`);
        })
    }).catch((err)=>{
        console.log('err', err)
    });
