import { IPost } from "@domain/types";

export interface IJsonPlaceHolderService {
   haddle(idPost?:number): Promise<IPost[]>;
}