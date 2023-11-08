import { Router } from 'express'
import { createProduct, deleteProduct, getAllProduct, getDetailProduct, updateProduct } from '../controllers/products'

const router = Router()
router.get('/products', getAllProduct)
router.post('/products', createProduct)
router.get('/products/:id', getDetailProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)
export default router