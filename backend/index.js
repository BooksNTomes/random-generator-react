import express, { json } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import generatorRoutes from './routes/generator.routes.js';

// testing/debugging variables and imports
const DEBUG = 1;

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const test = {
            name: "Numbers",
            description: "The classic, supports only integer numbers in this version. Max and Min is configurable.",
            image: "img",
            type:" NUMBER",
            list: [],
            validation: "INTEGER",
            published: false};

app.use(express.json());
app.use("/", generatorRoutes);

app.listen(PORT, () => {
    // Connect to Database
    connectDB();

    console.log("Server started at http://localhost:" + PORT);
});

if (DEBUG) {
    // RUN TESTS
    // CREATE

    const req = new Request(`http://localhost:${PORT}/generators-manager/create/`, {
        body: JSON.stringify(test),
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    });
    // console.log(req.body);
    const response = await fetch(req);

    // console.log(response);
}