import express from "express";
import { getPosts, createPost, updatePost, deletePost } from "../controllers/posts.js";

const router = express.Router();

router.post('/', getPosts);
router.post('/new', createPost)
router.post('/update', updatePost)
router.post('/delete', deletePost)
export default router;