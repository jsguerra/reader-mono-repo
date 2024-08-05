import { Request, Response } from "express";
import prisma from "../util/prisma";

// Get all Tags
const getAllTags = async (req: Request, res: Response) => {
  try {
    const tags = await prisma.tag.findMany({
      orderBy: {
        name: "asc",
      },
    });
    res.status(200).json({ message: "displaying tags", tags: tags });
  } catch (error) {
    console.error(error);
  }
};

// Create Tag
const createTag = async (req: Request, res: Response) => {
  const { name, slug } = req.body;
  try {
    const tag = await prisma.tag.create({
      data: {
        name,
        slug,
      },
    });

    res.status(201).json({ message: "Tag successfully created!", tag: tag });
  } catch (error) {
    console.error(error);
  }
};

// Get Tag
const getTag = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { query } = req;
  const page = typeof query.page === "string" ? Number(query.page) : 1;
  const limit = typeof query.limit === "string" ? Number(query.limit) : 10;

  try {
    const tag = await prisma.tag.findUnique({
      where: { id: Number(id) },
      include: {
        _count: {
          select: {
            books: true,
          },
        },
        books: {
          skip: (page - 1) * limit,
          take: limit,
          orderBy: {
            id: "desc",
          },
          include: {
            author: true,
          },
        },
      },
    });

    res.status(200).json({ page: page, limit: limit, tag: tag });
  } catch (error) {
    console.error(error);
  }
};

// Update Tag
const updateTag = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, slug } = req.body;
  try {
    const tag = await prisma.tag.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        slug,
      },
    });

    res.status(200).json({ message: "Tag has been updated", tag: tag });
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

    res.status(200).json({ message: "Tag has been deleted", tag: tag });
  } catch (error) {
    console.error(error);
  }
};

export { getAllTags, createTag, getTag, updateTag, deleteTag };
