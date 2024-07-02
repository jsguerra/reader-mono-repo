import { Request, Response } from "express";
import prisma from "../util/prisma";

// Get all Tags
const getAllTags = async (req: Request, res: Response) => {
  try {
    const tags = await prisma.tag.findMany();
    res.status(200).json({ message: "displaying tags", tags });
  } catch (error) {
    console.error(error);
  }
};

// Create Tag
const createTag = async (req: Request, res: Response) => {
  const { name, slug, books } = req.body;
  try {
    const tag = await prisma.tag.create({
      data: {
        name,
        slug,
        books,
      },
    });

    res.status(201).json({ message: "Tag successfully created!", tag });
  } catch (error) {
    console.error(error);
  }
};

// Get Tag
const getTag = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tag = await prisma.tag.findUnique({
      where: { id: Number(id) },
      include: { books: true },
    });

    res.status(200).json({ message: "displaying tag", tag });
  } catch (error) {
    console.error(error);
  }
};

// Update Tag
const updateTag = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, slug, books } = req.body;
  try {
    const tag = await prisma.tag.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        slug,
        books,
      },
    });

    res.status(204).json({ message: "Tag has been updated", tag });
  } catch (error) {
    console.log(error);
  }
};

// Delete Tag
const deleteTag = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tag = await prisma.tag.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(204).json({ message: "Tag has been deleted", tag });
  } catch (error) {
    console.error(error);
  }
};

export { getAllTags, createTag, getTag, updateTag, deleteTag };
