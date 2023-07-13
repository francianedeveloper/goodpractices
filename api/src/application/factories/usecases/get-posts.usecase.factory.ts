import { GetPostsUseCase } from "@application/usecases";
import { IJsonPlaceHolderService } from "@domain/services";
import { makeJsonPlaceHolderService } from "../services";
import { IGetPostsUseCase } from "@domain/usecases";

export const makeGetPostsUseCase = (): IGetPostsUseCase => {

    const jsonPlaceHolderService: IJsonPlaceHolderService = makeJsonPlaceHolderService()
    const getPostUseCase = new GetPostsUseCase(jsonPlaceHolderService);

    return getPostUseCase;
};
