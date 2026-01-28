import { Router } from "express";
import { createPost, getAllPosts, getPostById, replacePost } from "../controllers/postsController.js";
import { getCommentsByPostId } from "../controllers/commentsController.js";
const postsRouter = Router();

postsRouter.post("/", createPost);
postsRouter.get("/", getAllPosts);
postsRouter.get("/:postId", getPostById);
postsRouter.put("/:postId", replacePost);
postsRouter.get("/:postId/comments", getCommentsByPostId);

export default postsRouter;
