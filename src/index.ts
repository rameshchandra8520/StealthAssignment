import dotenv from 'dotenv';
import express, { Application } from 'express';
import connectDB from './config/db';
import authRoutes from './routes/auth.routes';

// Initialize environment variables
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

