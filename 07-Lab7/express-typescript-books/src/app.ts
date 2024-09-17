import express, { Application, Request, Response } from 'express';
import bookRoutes from './routes/books';

const app: Application = express();
const PORT = 4000;

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Book API! Use /api/books to manage books.');
});

// Book routes
app.use('/api/books', bookRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
