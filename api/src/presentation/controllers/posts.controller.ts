import { IGetPostsUseCase } from "@domain/usecases";
import { Request, Response, response } from "express";

export class GetPostsController {
    constructor(private _getPostsUseCase: IGetPostsUseCase){}

    async handle(req: Request, rs: Response): Promise<Response> {
        try {
            const { idPost } = req.body;

            const posts = await this._getPostsUseCase.execute(idPost);

            return rs.json(posts);
        } catch (error) {
            console.log(error);
            return response.status(400).json({ message: 'Unexpected error'});
            
        }
    }
}