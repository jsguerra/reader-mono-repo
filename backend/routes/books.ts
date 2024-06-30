import { Router } from "express";
import { getBooks } from "../controllers/books";

export const bookRoutes = Router();

// Create One book
bookRoutes.post("/books");

// Get all Books
bookRoutes.get("/books", getBooks);

// Get One Book
bookRoutes.get("/book/:bookId");

// Update One Book
bookRoutes.put("/books/:bookId");

// Delete One Book
bookRoutes.delete("/books:bookId");
