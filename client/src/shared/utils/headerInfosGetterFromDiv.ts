import headerBuilder from "shared/builders/headerBuilder";

export default function headerInfosGetterFromDiv(collectionHtmlDivElement: React.RefObject<HTMLDivElement>) {

    const collectionHtmlDiv = collectionHtmlDivElement.current;

    let headerTitle = collectionHtmlDiv?.querySelector('h2')?.innerHTML;
    let headerImage = collectionHtmlDiv?.querySelector('img')?.src;
    let headerDescription = collectionHtmlDiv?.querySelector('p')?.innerHTML;

    return headerBuilder(headerImage, headerTitle, headerDescription);
}