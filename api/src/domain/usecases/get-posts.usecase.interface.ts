import { IPost } from "@domain/types";

export interface IGetPostsUseCase {
    execute(idPost?: number): Promise<IPost[]>;
}
