import { IComment } from "@domain/types";
import { ICommentEntity } from "@infrastructure/entities/comment.entity";
import { Mapper } from "@infrastructure/protocolos/mapper.interface";

export class CommentMapper implements Mapper<IComment, ICommentEntity> {
    toDomain(data: ICommentEntity): IComment {
        return {        
            idPost: data.postId,
            idComment: data.id,
            describeComment: data.body,
            emailComment: data.email,
            titleComment: data.name
        };
    }
}