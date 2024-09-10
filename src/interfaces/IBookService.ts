import { Book } from "../entities/Book";
export interface IBookService {
  getAllBooks(): Promise<Book[]>;
  createBook(book: Book): Promise<Book>;
  updateBook(bookId: number, book: Partial<Book>): Promise<Book>;
  deleteBook(bookId: number): Promise<void>;
}
