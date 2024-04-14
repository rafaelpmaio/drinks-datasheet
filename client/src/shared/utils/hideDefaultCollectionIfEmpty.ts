import { ICollection } from "shared/interfaces/ICollection";

export default function hideDefaultCollectionIfEmpty(collectionsList: ICollection[]) {
    if (!collectionsList[0].drinksList.length) {
        return collectionsList.filter(collection => collection._id !== "0")
    }
}