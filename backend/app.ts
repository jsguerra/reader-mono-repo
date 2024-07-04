import fs from "fs";
import path from "path";
import express, { Request } from "express";
import { authorRoutes } from "./routes/authors";
import { bookRoutes } from "./routes/books";
import { tagRoutes } from "./routes/tags";
import multer, { FileFilterCallback } from "multer";

type DestinationCallback = (error: Error | null, destination: string) => void;

const app = express();

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const allowedMimeTypes = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "image/bmp",
    "image/svg+xml",
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const fileStorage = multer({
  storage: multer.diskStorage({
    destination: (
      req: Request,
      file: Express.Multer.File,
      cb: DestinationCallback
    ) => {
      let bookSlug = req.body.title.toLowerCase();
      let authorSlug = req.body.name.toLowerCase();
      let authorSlugLetter = authorSlug.slice(0, 1);
      const destination = bookSlug
        ? `public/books/${authorSlugLetter}/${authorSlug}/${bookSlug}`
        : `public/books/${authorSlugLetter}/${authorSlug}`;

      if (!fs.existsSync(bookSlug)) {
        fs.mkdirSync(destination, { recursive: true });
      }

      cb(null, destination);
    },
    filename: (
      req: Request,
      file: Express.Multer.File,
      cb: DestinationCallback
    ) => cb(null, file.originalname),
  }),
  fileFilter: fileFilter
});

app.use(express.json());
app.use(fileStorage.array('fileUpload'));
app.use("/", express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  next();
});
app.use(authorRoutes);
app.use(bookRoutes);
app.use(tagRoutes);

app.listen(8080, () =>
  console.log(`🚀 Server ready at: http://localhost:8080`)
);
