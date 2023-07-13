import { IJsonPlaceHolderService } from "@domain/services";
import { IPost } from "@domain/types";
import { ICommentEntity } from "@infrastructure/entities/comment.entity";
import { IPostEntity } from "@infrastructure/entities/post.entity";
import { PostMapper } from "@infrastructure/mappers/post.mapper";
import axios from "axios";

export class JsonPlaceHolderService implements IJsonPlaceHolderService{
    async haddle(idPost?: number | undefined): Promise<IPost[]> {
        let urlPosts = 'https://jsonplaceholder.typicode.com/posts'
        let urlComments = 'https://jsonplaceholder.typicode.com/comments'

        if(idPost !== undefined){ 
            urlPosts = urlPosts.concat('/',idPost.toString());
            urlComments = urlComments.concat('/',idPost.toString(),'/comments');
        }

        const postsJson: IPostEntity[] = await axios.get(urlPosts)
        .then(response => {
            let data = response.data;

            if (data !== undefined) {
                return data;
            }
        })
        .catch(error => {
            console.log(error);
        });

        const commentsJson: ICommentEntity[] = await axios.get(urlComments)
        .then(response => {
            let data = response.data;

            if (data !== undefined) {
                return data;
            }
        })
        .catch(error => {
            console.log(error);
        });

        postsJson.forEach((p)=>{
           if(commentsJson.some((e)=>e.postId===p.id)) {
                p.comments = [...commentsJson.filter((e)=>e.postId===p.id)];
            }
        });

        const posts: IPost[] = postsJson.map(new PostMapper().toDomain);

        return posts;
    }
}