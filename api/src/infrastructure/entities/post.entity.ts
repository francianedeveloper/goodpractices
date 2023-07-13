import { ICommentEntity } from "./comment.entity";

export interface IPostEntity{
    id: number;
    userId: number;
    title: string;
    body: string;
    comments?: ICommentEntity[] | undefined;
}