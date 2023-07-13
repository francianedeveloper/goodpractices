import { IJsonPlaceHolderService } from "@domain/services";
import { JsonPlaceHolderService } from "@infrastructure/services";

export const makeJsonPlaceHolderService = (): IJsonPlaceHolderService => {

    const makeJsonPlaceHolderService : IJsonPlaceHolderService = new JsonPlaceHolderService();

    return makeJsonPlaceHolderService;
};