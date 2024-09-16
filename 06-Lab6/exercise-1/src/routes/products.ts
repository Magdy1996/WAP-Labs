import { Router, Request, Response } from 'express';
import * as path from 'path';

const router = Router();

// GET request for /products
router.get('/', (req: Request, res: Response) => {
    // Correct the path to the products.html file
    res.sendFile('products.html', { root: path.join(__dirname, '../views') });
});

// POST request for /products
router.post('/', (req: Request, res: Response) => {
    const newProduct = req.body;
    // Handle your product data
    res.status(201).send('Product added successfully!');
});

export default router;
