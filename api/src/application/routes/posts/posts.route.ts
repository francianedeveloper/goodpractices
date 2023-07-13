import { makeGetPostsController } from "@application/factories/controllers";
import { Router } from "express";

const postsRoutes = Router();

postsRoutes.get('/posts', (request, response) => {
    return makeGetPostsController().handle(request, response);
});

export { postsRoutes };