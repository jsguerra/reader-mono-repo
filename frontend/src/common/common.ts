export interface Author {
  id: number;
  name: string;
  slug: string;
  thumbnail?: string;
  books: Book[];
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  book: Book[];
}

export interface Book {
  id: number;
  title: string;
  slug: string;
  pages?: string;
  favorite: boolean;
  tag: Tag[];
  author: Author;
}
