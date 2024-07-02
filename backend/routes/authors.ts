import { Router } from "express";
import { getAuthors } from "../controllers/authors";

export const authorRoutes = Router();

// Create One book
authorRoutes.post("/authors");

// Get all authors
authorRoutes.get("/authors", getAuthors);

// Get One Book
authorRoutes.get("/authors/:bookId");

// Update One Book
authorRoutes.put("/authors/:bookId");

// Delete One Book
authorRoutes.delete("/authors:bookId");
