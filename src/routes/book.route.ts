import { Router } from "express";
import BookController from "../controllers/BookController";
import { myContainer } from "../config/container";
const router = Router();
import { TYPES } from "../config/types";

const bookController = myContainer.get<BookController>(TYPES.BookController);
router.get("/", (req, res) => bookController.handleGetAll(req, res));

router.post("/", (req, res) => bookController.handleCreateBook(req, res));

router.patch("/:_id", (req, res) => bookController.handleUpdateBook(req, res));

router.delete("/:_id", (req, res) => bookController.handleDeleteBook(req, res));

export default router;
