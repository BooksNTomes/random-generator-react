import express from 'express';
import mongoose from 'mongoose';
import { createGenerator, deleteGenerator, getGenerators, getGenerator, updateGenerator } from '../controllers/generator.controller.js';

const router = express.Router();
// USER VIEW
router.get("/generators", getGenerators);
router.get("/generators/:id", getGenerator);
// ADMIN VIEW ("MANAGER")
router.get("/generators-manager/:id", getGenerators);
router.post("/generators-manager/create", createGenerator);
router.put("/generators-manager/:id", updateGenerator);
router.delete("/generators-manager/:id", deleteGenerator);

export default router;