import { Request, Response } from "express";

// Create One book

// Get all Books
const getBooks = (req: Request, res: Response) => {
  res.status(200).json({
    books: [
      {
        title: "hello world!!!",
      },
    ],
  });
};

// Get One Book

// Update One Book

// Delete One Book

export { getBooks };
