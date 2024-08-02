import { Router, Request, Response } from "express";
import prisma from "../util/prisma";

export const favoritesRoutes = Router();

// Get all favorites
favoritesRoutes.get("/favorites", async (req: Request, res: Response) => {
  const favorites = await prisma.book.findMany({
    where: { favorite: true },
    include: {
      author: true,
    },
  });
  res.status(200).json({ message: "Favorite books", favorites: favorites });
});
