import express from 'express';
import mongoose from 'mongoose';
import { createRogelement, deleteRogelement, getRogelements, updateRogelement } from '../controllers/rogelement.controller';

const router = express.router();

router.get("/", getRogelements);

router.post("/", createRogelement);

router.put("/:id", updateRogelement);

router.delete("/:id", deleteRogelement);