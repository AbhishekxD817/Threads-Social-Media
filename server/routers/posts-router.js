import express from 'express';
import { allPosts, createPost, readPost, updatePost } from '../controllers/posts-controller.js';

const postsRouter = express.Router();

postsRouter.route("/")
    .get(allPosts)
    .post(createPost)

postsRouter.route("/:id")
    .get(readPost)
    .patch(updatePost)


// post deletion is not allowed because 
// there is no authentication right now in our app

export default postsRouter;