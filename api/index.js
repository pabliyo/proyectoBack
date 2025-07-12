import express from 'express';
import cors from 'cors';
import { createServer } from '@vercel/node';

import productRoutes from '../src/routes/products.routes.js';
import authMiddleware from '../src/middlewares/auth.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/products', authMiddleware, productRoutes);

export default createServer(app);