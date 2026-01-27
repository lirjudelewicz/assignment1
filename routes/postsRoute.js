import { Router } from "express";
import { createPost, getAllPosts, getPostById, replacePost } from "../controllers/postsController.js";
const postsRouter = Router();

postsRouter.post("/", createPost);
postsRouter.get("/", getAllPosts);
postsRouter.get("/:postId", getPostById);
postsRouter.put("/:postId", replacePost);

export default postsRouter;
