import { ICollection } from "shared/interfaces/ICollection";

interface Type {
  _id: string
}

export default function getFromList<T extends Type> (id: string = '', list: T[])  {
    var itemFound =  list.find(
      (item) => id === item._id
    );

    return itemFound
  };
