import { Container } from "inversify";
import { TYPES } from "./types";
import { IBookRepository } from "../interfaces/IBookRepository";
import { IBookService } from "../interfaces/IBookService";
import { BookService } from "../services/BookService";
import { BookRepository } from "../repositories/BookRepository";
import BookController from "../controllers/BookController";

const myContainer = new Container();

myContainer.bind<IBookService>(TYPES.IBookService).to(BookService);
myContainer.bind<IBookRepository>(TYPES.IBookRepository).to(BookRepository);
myContainer.bind<BookController>(TYPES.BookController).to(BookController);

export { myContainer };
