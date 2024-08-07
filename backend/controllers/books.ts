import { Request, Response } from "express";
import prisma from "../util/prisma";

// Get all Books
const getBooks = async (req: Request, res: Response) => {
  const { query } = req;
  const page = typeof query.page === "string" ? Number(query.page) : 1;
  const limit = typeof query.limit === "string" ? Number(query.limit) : 20;

  if (query.q) {
    const results = await prisma.book.findMany({
      where: {
        title: {
          contains: query.q.toString(),
        },
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        id: "desc",
      },
      include: {
        tags: true,
        author: true,
      },
    });
    const totalRecords = await prisma.book.count();
    res.status(200).json({
      page: page,
      limit: limit,
      records: totalRecords,
      results: results,
    });
  } else {
    const books = await prisma.book.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        id: "desc",
      },
      include: {
        tags: true,
        author: true,
      },
    });
    const totalRecords = await prisma.book.count();
    res
      .status(200)
      .json({
        page: page,
        limit: limit,
        records: totalRecords,
        books: books,
      });
  }
};

// Create Book
const createBook = async (req: Request, res: Response) => {
  const { title, slug, pages, favorite, tags, author } = req.body;
  const authorValue = author.split(":");
  const authorId = Number(authorValue[1]);
  const favBoolean = favorite === "on" ? true : false;
  const tagIds = tags.map((tag: string) => {
    const id = tag;
    return { id: Number(id) };
  });

  try {
    const book = await prisma.book.create({
      data: {
        title,
        slug,
        pages,
        favorite: favBoolean,
        tags: {
          connect: tagIds,
        },
        authorId,
      },
    });

    res.status(200).json({ message: "Book successfully created!", book: book });
  } catch (error) {
    console.log(error);
  }
};

// Get Book
const getBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await prisma.book.findUnique({
      where: { id: Number(id) },
      include: { author: true, tags: true },
    });

    res.status(200).json({ message: "displaying book", book: book });
  } catch (error) {
    console.error(error);
  }
};

// Update Book
const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, slug, pages, favorite, tags, author } = req.body;
  const authorValue = author.split(":");
  const authorId = Number(authorValue[1]);
  const favBoolean = favorite === "on" ? true : false;
  const tagIds = tags.map((tag: string) => {
    const id = tag;
    return { id: Number(id) };
  });

  try {
    const book = await prisma.book.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        slug,
        pages,
        favorite: favBoolean,
        tags: {
          connect: tagIds,
        },
        authorId,
      },
    });

    res.status(200).json({ message: "Book has been updated", book: book });
  } catch (error) {
    console.log(error);
  }
};

// Delete Book
const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await prisma.book.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json({ message: "Book has been deleted", book: book });
  } catch (error) {
    console.error(error);
  }
};

export { getBooks, createBook, getBook, updateBook, deleteBook };
