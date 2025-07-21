import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import productRoutes from '../src/routes/products.routes.js';
import authMiddleware from '../src/middlewares/auth.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());

//app.use('/products', authMiddleware, productRoutes);
app.get('/products/test', (req, res) => {
  res.json({ message: '¡Funciona en Vercel!' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

export default (req, res) => {
  app(req, res);
};