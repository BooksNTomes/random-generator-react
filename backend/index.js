import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import generatorRoutes from './routes/generator.routes.js';

// testing/debugging variables and imports
const DEBUG = 1;

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/", generatorRoutes)

app.listen(PORT, () => {
    // Connect to Database
    connectDB();

    console.log("Server started at http://localhost:" + PORT);
});

if (DEBUG) {
    // RUN TESTS
    // CREATE

    let req = new Request(`http://localhost:${PORT}/generators-manager/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "Numbers",
            description: "The classic, supports only integer numbers in this version. Max and Min is configurable.",
            image: "",
            type:" NUMBER",
            list: [],
            validation: "INTEGER",
            published: false})});
    // console.log(req.body);
    const response = await fetch(req);

    console.log(response);
}