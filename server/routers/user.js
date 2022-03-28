import express from "express";
import { getUser, updateUser, banUser, payment } from "../controllers/user.js";

const router = express.Router();

router.post('/', getUser);
router.post('/update', updateUser)
router.post('/band-user', banUser)
router.post('/payment', payment)
export default router;