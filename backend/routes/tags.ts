import { Router } from "express";
import { getTags } from "../controllers/tags";

export const bookRoutes = Router();

// Create One book
bookRoutes.post("/tags");

// Get all tags
bookRoutes.get("/tags", getTags);

// Get One Book
bookRoutes.get("/tags/:bookId");

// Update One Book
bookRoutes.put("/tags/:bookId");

// Delete One Book
bookRoutes.delete("/tags:bookId");
