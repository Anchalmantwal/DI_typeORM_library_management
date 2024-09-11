import { Router } from "express";
import BookController from "../controllers/BookController";
import { myContainer } from "../config/container";
import { IBookService } from "../interfaces/IBookService";
import { TYPES } from "../config/types";
const router = Router();

const bookService = myContainer.get<IBookService>(TYPES.IBookService);
const bookController = new BookController(bookService);
router.get("/", (req, res) => bookController.handleGetAll(req, res));

router.post("/", (req, res) => bookController.handleCreateBook(req, res));

router.patch("/:_id", (req, res) => bookController.handleUpdateBook(req, res));

router.delete("/:_id", (req, res) => bookController.handleDeleteBook(req, res));

export default router;
