import { Router } from "express";
import {
  getAllTags,
  createTag,
  getTag,
  updateTag,
  deleteTag,
} from "../controllers/tags";

export const tagRoutes = Router();

// Create Tag
tagRoutes.post("/tags", createTag);

// Get all tags
tagRoutes.get("/tags", getAllTags);

// Get Tag
tagRoutes.get("/tags/:id", getTag);

// Update Tag
tagRoutes.put("/tags/:id", updateTag);

// Delete Tag
tagRoutes.delete("/tags/:id", deleteTag);
