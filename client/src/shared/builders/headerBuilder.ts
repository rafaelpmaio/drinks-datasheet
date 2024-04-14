import { IHeader } from "shared/interfaces/IHeader";

export default function headerBuilder(
  image: string = '',
  title: string = 'not found',
  description: string = ''
) {


  const header: IHeader = {
    collectionImage: image,
    collectionName: title,
    collectionDescription: description,
  };

  return header;
}
