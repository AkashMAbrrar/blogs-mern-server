import express from 'express';
import { getAllUsers, login, signup } from '../controller/user_controller';

const router = express.Router();
// get all the users exist
router.get("/", getAllUsers);
// create or signup for user
router.post("/signup", signup);
// router for login
router.post("/login", login);

export default router;