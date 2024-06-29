import { Request, Response } from "express";

const getBooks = (req: Request, res: Response) => {
  res.status(200).json({
    books: [
      {
        title: "hello world!!!",
      },
    ],
  });
};

export { getBooks };
