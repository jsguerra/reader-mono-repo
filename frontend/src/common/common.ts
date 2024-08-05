export interface Author {
  id: number;
  name: string;
  slug: string;
  thumbnail?: string;
  books: Book[];
}

export interface Tag {
  id: number;
  _count: { books: number };
  name: string;
  slug: string;
  books: Book[];
}

export interface Book {
  id: number;
  title: string;
  slug: string;
  pages?: string;
  favorite: boolean;
  tags: Tag[];
  author: Author;
}

export const siteURL = "http://localhost:4321";
export const serverURL = "http://localhost:8080";
