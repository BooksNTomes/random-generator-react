import express, { json } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import generatorRoutes from './routes/generator.routes.js';

// import getGeneratorTest from './debug/generator.debug.js';

// testing/debugging variables and imports
const DEBUG = 1;
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/", generatorRoutes);
app.listen(PORT, () => {
    // Connect to Database
    connectDB();

    console.log("Server started at http://localhost:" + PORT);
});

if (DEBUG) {
    // RUN TESTS
    // createGeneratorTest();
    // getGeneratorTest();
}