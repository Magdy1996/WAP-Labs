export interface Book {
    id: number;
    title: string;
    ISBN: string;
    publishedDate: string;
    author: string;
}

export class BookModel {
    private static books: Book[] = [];
    private static idCounter: number = 1;

    static create(book: Omit<Book, 'id'>): Book {
        const newBook: Book = { id: this.idCounter++, ...book };
        this.books.push(newBook);
        return newBook;
    }

    static findAll(): Book[] {
        return this.books;
    }

    static findById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    static update(id: number, updatedBook: Omit<Book, 'id'>): Book | undefined {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books[bookIndex] = { id, ...updatedBook };
            return this.books[bookIndex];
        }
        return undefined;
    }

    static deleteById(id: number): boolean {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return true;
        }
        return false;
    }
}
