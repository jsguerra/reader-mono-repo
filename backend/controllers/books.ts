import { Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create book

// Get all Books
const getBooks = async (req: Request, res: Response) => {
  const books = await prisma.book.findMany();
  res.status(200).json(books);
};

// Get Book

// Update Book

// Delete Book

export { getBooks };
