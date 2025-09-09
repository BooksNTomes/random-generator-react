import express, { json } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import generatorRoutes from './routes/generator.routes.js';
import { runTests } from './debug/generator.debug.js';

// Parameters
dotenv.config();
const URL = `${process.env.BACKEND_URL? process.env.BACKEND_URL : process.env.LOCAL_BACKEND_URL}${process.env.PORT}`;

// App
const app = express();
app.use(express.json());
app.use("/", generatorRoutes);
app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server started at: ${URL}`);
});

// Debug
if (process.env.DEBUG) {
    runTests(process.env.RUN_TESTS);
}