import path from 'path';
import express from 'express';
import { authorRoutes } from './routes/authors';
import { bookRoutes } from './routes/books';
import { tagRoutes } from './routes/tags';

const app = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  next();
});
app.use(authorRoutes);
app.use(bookRoutes);
app.use(tagRoutes);

app.listen(8080, () => console.log(`🚀 Server ready at: http://localhost:8080`));
