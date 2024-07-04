import { Router } from "express";
import {
  getAuthors,
  createAuthor,
  getAuthor,
  updateAuthor,
  deleteAuthor,
} from "../controllers/authors";

export const authorRoutes = Router();

// Get all authors
authorRoutes.get("/authors", getAuthors);

// Create author
authorRoutes.post("/authors", createAuthor);

// Get author
authorRoutes.get("/authors/:id", getAuthor);

// Update author
authorRoutes.put("/authors/:id", updateAuthor);

// Delete author
authorRoutes.delete("/authors/:id", deleteAuthor);
