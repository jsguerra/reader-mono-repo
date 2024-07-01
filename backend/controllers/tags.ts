import { Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create Tag

// Get all Tags
const getTags = async (req: Request, res: Response) => {
  const tags = await prisma.tag.findMany();
  res.status(200).json(tags);
};

// Get Tag

// Update Tag

// Delete Tag

export { getTags };
