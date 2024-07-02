import { Request, Response } from "express";
import prisma from "../util/prisma";

// Create Author

// Get all Authors
const getAuthors = async (req: Request, res: Response) => {
  const authors = await prisma.author.findMany();
  res.status(200).json(authors);
};

// Get Author

// Update Author

// Delete Author

export { getAuthors };
