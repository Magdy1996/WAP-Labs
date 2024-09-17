import { Router, Request, Response } from 'express';
import { BookModel } from '../models/book';

const router = Router();

router.post('/', (req: Request, res: Response) => {
    const { title, ISBN, publishedDate, author } = req.body;
    const newBook = BookModel.create({ title, ISBN, publishedDate, author });
    res.status(201).json(newBook);
});


router.get('/', (req: Request, res: Response) => {
    const books = BookModel.findAll();
    res.json(books);
});

router.get('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const book = BookModel.findById(id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

router.put('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const { title, ISBN, publishedDate, author } = req.body;
    const updatedBook = BookModel.update(id, { title, ISBN, publishedDate, author });
    if (updatedBook) {
        res.json(updatedBook);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});


router.delete('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const isDeleted = BookModel.deleteById(id);
    if (isDeleted) {
        res.json({ message: 'Book deleted successfully' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

export default router;
