import { IPost } from "@domain/types";
import { IPostEntity } from "@infrastructure/entities/post.entity";
import { Mapper } from "@infrastructure/protocolos/mapper.interface";
import { CommentMapper } from "./comment.mapper";

export class PostMapper implements Mapper<IPost, IPostEntity> {
    toDomain(data: IPostEntity): IPost {
        console.log
        return {
            idPost: data.id,
            idUser: data.userId,
            titlePost: data.title,
            describePost: data.body,
            comments: data.comments ? data?.comments.map(new CommentMapper().toDomain) : undefined            
        };
    }
}