export interface IPost {
    idPost: number;
    idUser: number;
    titlePost: string;
    describePost: string;
    comments?: ICommentPost[] | undefined;
}

export interface ICommentPost {
    idComment: number;
    idPost: number;
    titleComment:string;
    emailComment: string;
    describeComment: string;
}