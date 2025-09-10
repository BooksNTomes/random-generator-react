import express from 'express';
import mongoose from 'mongoose';
import {login} from '../controllers/user.controller.js';

// TODO: AUTH
const router = express.Router();
router.get("/auth", login);