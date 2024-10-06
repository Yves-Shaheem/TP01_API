import { Router } from 'express';
import {ProductController} from '../controllers/product.controller'

const router = Router();
const productController = new ProductController();
/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - category
 *         - quantity
 *         - price
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the product, the name have to be between 3 and 50 characters and allows only letters and whitespace
 *         category:
 *           type: string
 *           description: Category of product
 *         quantity:
 *           type: number
 *           description: All available products at the moment, a positive integer
 *         price:
 *           type: number
 *           description: Price of product, a positive integer or float
 *       example:
 *         id: 1
 *         name: Fjallraven
 *         description: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
 *         category: Men's clothing
 *         quantity: 40
 *         price: 109.95
*/

/**
 * @swagger
 * /api/products:
 *   get:
 *     tags: [Products]
 *     summary: Retrieve a list of products
 *     description: Retrieve a list of products from the API. Can be used to populate a list of products in your system. Can Filter with price or quantity, there's minimum number and maximum number to enter otherwise it will be the full product list  
 *     parameters:
 *       - in: query
 *         name: filterOption
 *         description: Filter Option which is either 'price' or 'quantity'
 *         type: string
 *       - in: query
 *         name: min
 *         description: Mininum number to filter
 *         type: number 
 *       - in: query
 *         name: max
 *         description: Maximum number to filter
 *         type: number  
 *     responses:
 *       200:
 *         description: List of products retrived successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid query
 *
*/         
router.get('/products', productController.getProducts);
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid query 
 *       401:
 *         description: Unauthaurised User
 */      
router.post('/products', productController.createNewProduct);
/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Modify a product by id
 *     tags: [Products]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: Product's id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product modified successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid query 
 */      
router.put('/products/:id', productController.modifyProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product by id
 *     tags: [Products]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: Product's id
 *     responses:
 *       204:
 *         description: Product deleted successfully
 *       400:
 *         description: Invalid query 
 *       404:
 *         description: Product not found
 *       401:
 *         description: Unauthorized user
 */      
router.delete('/products/:id', productController.deleteProduct);

export default router;