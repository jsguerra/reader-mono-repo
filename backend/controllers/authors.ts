import { Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
