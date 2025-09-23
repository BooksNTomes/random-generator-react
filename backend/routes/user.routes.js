import express from 'express';
import mongoose from 'mongoose';
import {authenticate, login, logout, refresh, register} from '../controllers/user.controller.js';

const router = express.Router();
router.post("/register", register); // TO BE DELETED IN PRODUCTION
router.post("/login", login);
router.post("/logout", logout);
router.get("/refresh", refresh);
router.get("/authenticate", authenticate);

export default router;