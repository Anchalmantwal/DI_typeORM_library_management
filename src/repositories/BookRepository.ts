import { injectable } from "inversify";
import { Repository } from "typeorm";
import { Book } from "../entities/Book";
import { IBookRepository } from "../interfaces/IBookRepository";
import { AppDataSource } from "../config/dataSource";

@injectable()
export class BookRepository implements IBookRepository {
  private repository: Repository<Book>;

  constructor() {
    this.repository = AppDataSource.getRepository(Book);
  }

  public async findAll(): Promise<Book[]> {
    return await this.repository.find();
  }
  public async findOne(id: number): Promise<Book | null> {
    return this.repository.findOneBy({ id });
  }
  public async save(book: Book): Promise<Book> {
    return await this.repository.save(book);
  }

  public async remove(book: Book): Promise<void> {
    await this.repository.remove(book);
  }
}
