import { Router } from 'express';
import { getBooks } from '../controllers/books';

export const bookRoutes = Router();

bookRoutes.get('/books', getBooks);
