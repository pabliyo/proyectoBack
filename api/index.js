import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import productRoutes from '../src/routes/products.routes.js';
import authMiddleware from '../src/middlewares/auth.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', authMiddleware, productRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

export default app;