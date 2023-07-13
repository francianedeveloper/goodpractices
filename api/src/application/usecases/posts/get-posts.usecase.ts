import { IJsonPlaceHolderService } from "@domain/services";
import { IPost } from "@domain/types";
import { IGetPostsUseCase } from "@domain/usecases";

export class GetPostsUseCase implements IGetPostsUseCase {
    constructor(
        private _jsonPlaceHolderService: IJsonPlaceHolderService,
    ) {
    }
    async execute(idPost?: number): Promise<any[]> {
        const posts: IPost[] = await this._jsonPlaceHolderService.haddle(idPost);

        if(posts.length<0) throw new Error("Posts not found");
        
        return posts;
    }
}