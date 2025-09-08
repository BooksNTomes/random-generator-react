import express, { json } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import generatorRoutes from './routes/generator.routes.js';

dotenv.config();

const DEBUG = 0;
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/", generatorRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});

if (DEBUG) {
    // RUN TESTS
}