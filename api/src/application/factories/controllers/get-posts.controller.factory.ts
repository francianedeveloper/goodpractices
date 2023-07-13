import { IGetPostsUseCase } from "@domain/usecases";
import { GetPostsController } from "@presentation/controllers/posts.controller";
import { makeGetPostsUseCase } from "../usecases";

export const makeGetPostsController = (): any => {

    const getPostsUseCase: IGetPostsUseCase = makeGetPostsUseCase();
    const getPostsController = new GetPostsController(getPostsUseCase);

    return getPostsController;
};