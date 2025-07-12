import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import productRoutes from './src/routes/products.routes.js';
import authMiddleware from './src/middlewares/auth.middleware.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/products', authMiddleware, productRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});