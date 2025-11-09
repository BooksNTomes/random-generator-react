import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './config/db.js';
import generatorRoutes from './routes/generator.routes.js';
import userRoutes from './routes/user.routes.js';
import { runTests } from './testing/generator.testing.js';

// Parameters
dotenv.config();

// App
const app = express();
const URL = `${process.env.BACKEND_URL? process.env.BACKEND_URL : process.env.LOCAL_BACKEND_URL}${process.env.PORT}`;

// Middleware
app.use(cors({
    origin: process.env.ORIGIN_CLIENT,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
// Middleware (Routes)
app.use("/", generatorRoutes);
app.use("/admin/", userRoutes);

// Connect
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server started at: ${URL}`);
    });
});

// Debug
if (process.env.DEBUG) {
    runTests(process.env.RUN_TESTS);
}