import express from 'express';
import mongoose from 'mongoose';
import { createGenerator, deleteGenerator, getGenerators, updateGenerator } from '../controllers/generator.controller';

const router = express.Router();

router.get("/", getGenerators);

router.post("/", createGenerator);

router.put("/:id", updateGenerator);

router.delete("/:id", deleteGenerator);