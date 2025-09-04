import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DEBUG = 0;

app.listen(PORT, () => {

    connectDB();
    
    console.log("Server started at http://localhost:" + PORT);

    if (DEBUG) {
        // RUN TESTS
    }

});