import express from 'express';
import { allPosts, createPost, deletePost, readPost, updatePost } from '../controllers/posts-controller.js';

const postsRouter = express.Router();

postsRouter.route("/")
    .get(allPosts)
    .post(createPost)

postsRouter.route("/:id")
    .get(readPost)
    .patch(updatePost)
    .delete(deletePost)

export default postsRouter;