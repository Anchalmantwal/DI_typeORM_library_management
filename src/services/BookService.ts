import { injectable, inject } from "inversify";
import { IBookService } from "../interfaces/IBookService";
import { IBookRepository } from "../interfaces/IBookRepository";
import { TYPES } from "../config/types";
import { Book } from "../entities/Book";

@injectable()
export class BookService implements IBookService {
  private _bookRepository: IBookRepository;

  public constructor(
    @inject(TYPES.IBookRepository) bookRepository: IBookRepository
  ) {
    this._bookRepository = bookRepository;
  }

  public async getAllBooks(): Promise<Book[]> {
    return await this._bookRepository.findAll();
  }

  public async createBook(book: Book): Promise<Book> {
    return await this._bookRepository.save(book);
  }

  public async updateBook(
    bookId: number,
    bookData: Partial<Book>
  ): Promise<Book> {
    const book = await this._bookRepository.findOne(bookId);
    if (!book) throw new Error("Book not found");
    Object.assign(book, bookData);
    return await this._bookRepository.save(book);
  }

  public async deleteBook(bookId: number): Promise<void> {
    const book = await this._bookRepository.findOne(bookId);
    if (!book) throw new Error("Book not found");
    return await this._bookRepository.remove(book);
  }
}
