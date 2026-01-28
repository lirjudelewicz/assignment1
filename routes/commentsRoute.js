import { Router } from "express";
import { createComment, deleteComment, readCommentById, updateComment } from "../controllers/commentsController.js";

const commentsRouter = Router();

commentsRouter.post("/", createComment);
commentsRouter.get("/:commentId", readCommentById);
commentsRouter.put("/:commentId", updateComment);
commentsRouter.delete("/:commentId", deleteComment);
export default commentsRouter;
