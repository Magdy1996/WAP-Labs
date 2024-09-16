import express from 'express'; 

import userRoutes from './routes/users';
import productRoutes from './routes/products';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(`./views/index.html`, { root: __dirname });
});

app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.use((req: express.Request, res: express.Response) => {
    res.sendFile(`./views/404.html`, { root: __dirname });
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong! Please try again later.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
