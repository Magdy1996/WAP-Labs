"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
class BookModel {
    static create(book) {
        const newBook = Object.assign({ id: this.idCounter++ }, book);
        this.books.push(newBook);
        return newBook;
    }
    static findAll() {
        return this.books;
    }
    static findById(id) {
        return this.books.find(book => book.id === id);
    }
    static update(id, updatedBook) {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books[bookIndex] = Object.assign({ id }, updatedBook);
            return this.books[bookIndex];
        }
        return undefined;
    }
    static deleteById(id) {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return true;
        }
        return false;
    }
}
exports.BookModel = BookModel;
BookModel.books = [];
BookModel.idCounter = 1;
