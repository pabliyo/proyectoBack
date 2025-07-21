import * as productModel from '../models/product.model.js';

export const getAll = productModel.getAllProducts;
export const getById = productModel.getProductById;
export const create = productModel.createProduct;
export const update = productModel.updateProduct;
export const partialUpdate = productModel.updateProduct; // PATCH usa el mismo método
export const remove = productModel.deleteProduct;