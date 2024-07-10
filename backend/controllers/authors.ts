import { Request, Response } from "express";
import prisma from "../util/prisma";

// Get all Authors
const getAuthors = async (req: Request, res: Response) => {
  const authors = await prisma.author.findMany();
  res.status(200).json(authors);
};

// Create Author
const createAuthor = async (req: Request, res: Response) => {
  const { name, slug, thumbnail } = req.body;

  try {
    const author = await prisma.author.create({
      data: {
        name,
        slug,
        thumbnail
      },
    });

    res
      .status(201)
      .json({ message: "Author successfully created!", author: author });
  } catch (error) {
    console.error(error);
  }
};

// Get Author
const getAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const author = await prisma.author.findUnique({
      where: { id: Number(id) },
      include: { books: true },
    });

    res.status(200).json({ message: "displaying author", author: author });
  } catch (error) {
    console.error(error);
  }
};

// Update Author
const updateAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, slug, thumbnail } = req.body;
  try {
    const author = await prisma.author.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        slug,
        thumbnail
      },
    });

    res
      .status(200)
      .json({ message: "Author has been updated", author: author });
  } catch (error) {
    console.log(error);
  }
};

// Delete Author
const deleteAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const author = await prisma.author.delete({
      where: {
        id: Number(id),
      },
    });

    res
      .status(200)
      .json({ message: "Author has been deleted", author: author });
  } catch (error) {
    console.error(error);
  }
};

export { getAuthors, createAuthor, getAuthor, updateAuthor, deleteAuthor };
