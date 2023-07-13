import { IComment } from "./comment.type";

export interface IPost {
    idPost: number;
    idUser: number;
    titlePost: string;
    describePost: string;
    comments?: IComment[] | undefined;
}