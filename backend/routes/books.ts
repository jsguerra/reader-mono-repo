import { Router } from "express";
import {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} from "../controllers/books";

export const bookRoutes = Router();

// Get all Books
bookRoutes.get("/books", getBooks);

// Create book
bookRoutes.post("/books", createBook);

// Get Book
bookRoutes.get("/books/:id", getBook);

// Update Book
bookRoutes.put("/books/:id", updateBook);

// Delete Book
bookRoutes.delete("/books/:id", deleteBook);
