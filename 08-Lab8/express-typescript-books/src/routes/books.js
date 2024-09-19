"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_1 = require("../models/book");
const router = (0, express_1.Router)();
// Create a new book
router.post('/', (req, res) => {
    const { title, ISBN, publishedDate, author } = req.body;
    const newBook = book_1.BookModel.create({ title, ISBN, publishedDate, author });
    res.status(201).json(newBook);
});
// Get all books
router.get('/', (req, res) => {
    const books = book_1.BookModel.findAll();
    res.json(books);
});
// Get a book by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const book = book_1.BookModel.findById(id);
    if (book) {
        res.json(book);
    }
    else {
        res.status(404).json({ message: 'Book not found' });
    }
});
// Update a book by ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { title, ISBN, publishedDate, author } = req.body;
    const updatedBook = book_1.BookModel.update(id, { title, ISBN, publishedDate, author });
    if (updatedBook) {
        res.json(updatedBook);
    }
    else {
        res.status(404).json({ message: 'Book not found' });
    }
});
// Delete a book by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const isDeleted = book_1.BookModel.deleteById(id);
    if (isDeleted) {
        res.json({ message: 'Book deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'Book not found' });
    }
});
exports.default = router;
