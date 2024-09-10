import { Book } from "../entities/Book";
export interface IBookRepository {
  findAll(): Promise<Book[]>;
  findOne(bookId: number): Promise<Book | null>;
  save(book: Book): Promise<Book>;
  remove(book: Book): Promise<void>;
}
