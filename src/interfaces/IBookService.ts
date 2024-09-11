import { Book } from "../entities/Book";
export interface IBookService {
  getAllBooks(): Promise<Book[]>;
  createBook(book: Book): Promise<Book | null>;
  updateBook(bookId: number, book: Partial<Book>): Promise<Book | null>;
  deleteBook(bookId: number): Promise<void>;
}
