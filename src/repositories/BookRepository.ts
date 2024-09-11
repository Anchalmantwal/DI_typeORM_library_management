import { injectable } from "inversify";
import { Repository } from "typeorm";
import { Book } from "../entities/Book";
import { IBookRepository } from "../interfaces/IBookRepository";
import { AppDataSource } from "../config/dataSource";
import { InternalServerError } from "../errors/InternalServerError";


@injectable()
export class BookRepository implements IBookRepository {
  private repository: Repository<Book>;

  constructor() {
    this.repository = AppDataSource.getRepository(Book);
  }

  public async findAll(): Promise<Book[]> {
    try {
      if(!Book){
        throw new InternalServerError("Cannot get all Books");
      }
      return await this.repository.find();

    } catch (err) {
      console.log("The error is ",err);
      return [];
    }
  }
  public async findOne(id: number): Promise<Book | null> {
    try {
      const book = this.repository.findOneBy({ id });
      if (book === null) {
        throw new InternalServerError(`Cannot get the Book with ${id}`);
      }
      return book;
    } catch (err) {
      console.error(`Error finding book with id: ${id}`, err);
      return null;
    }
  }
  public async save(book: Book): Promise<Book | null> {
    try {
      const _book = await this.repository.save(book);
      if (_book === null) {
        throw new InternalServerError("Cannot create the book");
      }
      return _book;
    } catch (err) {
      console.error(`Error in saving Book`, err);
      return null;
    }
  }

  public async remove(book: Book): Promise<void> {
    try {
      await this.repository.remove(book);
      if(!book){
        throw new InternalServerError("Cannot delete the book");
      }
    } catch (err) {
      console.error(`Error in deleting the book`, err);
    }
  }
}
