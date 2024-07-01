import { Router } from "express";
import { getAuthors } from "../controllers/authors";

export const bookRoutes = Router();

// Create One book
bookRoutes.post("/authors");

// Get all authors
bookRoutes.get("/authors", getAuthors);

// Get One Book
bookRoutes.get("/authors/:bookId");

// Update One Book
bookRoutes.put("/authors/:bookId");

// Delete One Book
bookRoutes.delete("/authors:bookId");
