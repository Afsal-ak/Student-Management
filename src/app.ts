import express from 'express';
import path from 'path';
import studentRoutes from './routes/studentRoutes'; // Import routes

import bodyParser from 'body-parser';
import { connectDB } from './db/connection'; 
const app=express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views')); // Set the views directory

connectDB();

// db/connection.ts
import mongoose from 'mongoose';

// Body parser middleware to handle POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/students', studentRoutes);
 // Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});