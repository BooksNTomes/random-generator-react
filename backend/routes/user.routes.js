import express from 'express';
import mongoose from 'mongoose';
import {} from '../controllers/user.controller.js';

// TODO: AUTH
const router = express.Router();
router.get("/auth", loginUser);