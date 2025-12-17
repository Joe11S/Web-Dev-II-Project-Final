// ===== IMPORTS =====
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// ===== LOAD ENV VARIABLES =====
dotenv.config();

// ===== APP CONFIG =====
const app = express();
const port = process.env.PORT || 4001;

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());

// ===== MONGODB CONNECTION =====
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch((err) => {
        console.error('❌ MongoDB Connection Failed:', err.message);
        process.exit(1);
    });

// ===== TEST ROUTE =====
app.get('/', (req, res) => {
    res.send('✅ Server is running and MongoDB is connected');
});

// ===== START SERVER =====
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});