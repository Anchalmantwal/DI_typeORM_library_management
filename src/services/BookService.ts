import { injectable, inject } from "inversify";
import { IBookService } from "../interfaces/IBookService";
import { IBookRepository } from "../interfaces/IBookRepository";
import { TYPES } from "../config/types";
import { Book } from "../entities/Book";
import { NotFound } from "../errors/NotFound";
import { BadRequest } from "../errors/BadRequest";
@injectable()
export class BookService implements IBookService {
  private _bookRepository: IBookRepository;

  constructor(@inject(TYPES.IBookRepository) bookRepository: IBookRepository) {
    this._bookRepository = bookRepository;
  }

  public async getAllBooks(): Promise<Book[]> {
    if (!Book) {
      throw new NotFound("Book not available");
    }
    return await this._bookRepository.findAll();
  }

  public async createBook(book: Book): Promise<Book | null> {
    if (!book || !book.book_name || !book.author_name || !book.published_year) {
      throw new BadRequest("All book details must be provided.");
    }

    try {
      const savedBook = await this._bookRepository.save(book);
      if (!savedBook) {
        throw new Error("Book could not be created.");
      }

      return savedBook;
    } catch (err) {
      console.error("Error creating book:", err);
      throw new Error("An error occurred while creating the book.");
    }
  }
  public async updateBook(
    bookId: number,
    bookData: Partial<Book>
  ): Promise<Book | null> {
    const book = await this._bookRepository.findOne(bookId);
    if (!book) throw new NotFound("Book not found");
    Object.assign(book, bookData);
    return await this._bookRepository.save(book);
  }

  public async deleteBook(bookId: number): Promise<void> {
    const book = await this._bookRepository.findOne(bookId);
    if (!book) throw new NotFound("Book not found");
    return await this._bookRepository.remove(book);
  }
}
