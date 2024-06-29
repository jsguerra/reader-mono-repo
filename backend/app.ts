import express from 'express';
import { bookRoutes } from './routes/books';

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(bookRoutes);

app.listen(8080, () => console.log(`🚀 Server ready at: http://localhost:8080`));
