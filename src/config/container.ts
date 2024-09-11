import { Container } from "inversify";
import { TYPES } from "./types";
import { IBookRepository } from "../interfaces/IBookRepository";
import { IBookService } from "../interfaces/IBookService";
import { BookService } from "../services/BookService";
import { BookRepository } from "../repositories/BookRepository";

const myContainer = new Container();

myContainer.bind<IBookService>(TYPES.IBookService).to(BookService);
myContainer.bind<IBookRepository>(TYPES.IBookRepository).to(BookRepository);

export { myContainer };
