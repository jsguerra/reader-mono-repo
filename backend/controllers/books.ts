import { Request, Response } from "express";
import prisma from "../util/prisma";

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
