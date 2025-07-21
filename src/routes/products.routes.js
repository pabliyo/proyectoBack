import express from 'express';
import * as productController from '../controllers/products.controller.js';

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.patch('/:id', productController.partialUpdateProduct);
router.delete('/:id', productController.deleteProduct);


// Ruta de prueba sin middleware
router.get('/test', (req, res) => {
  res.json({ message: 'Funciona sin JWT ni Firebase' });
});


export default router;

