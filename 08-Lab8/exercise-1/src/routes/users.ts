import { Router, Request, Response } from 'express';
import * as path from 'path';

const router = Router();

// GET request for /users
router.get('/', (req: Request, res: Response) => {
    // Correct the path to the users.html file
    res.sendFile('users.html', { root: path.join(__dirname, '../views') });
});

// POST request for /users
router.post('/', (req: Request, res: Response) => {
    const newUser = req.body;
    // Handle your user data
    res.status(201).send('User created successfully!');
});

export default router;
