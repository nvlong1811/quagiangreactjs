import express from "express";
import { getMessage, createMessage} from "../controllers/chat.js";

const router = express.Router();

router.post('/', getMessage);
router.post('/new', createMessage)

export default router;