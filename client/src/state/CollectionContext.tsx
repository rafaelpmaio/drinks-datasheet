import React, { useState } from "react";
import { ICollection } from "shared/interfaces/ICollection";

interface CollectionContextProps {
  collectionsList: ICollection[];
  setCollectionsList: (list: ICollection[]) => void;
  _id: string;
  setId: (id: string) => void;
  name: string;
  setName: (name: string) => void;
  description: string;
  setDescription: (description: string) => void;
  image: string;
  setImage: (image: string) => void;
  selectedCollection: ICollection;
  setSelectedCollection: (collection: ICollection) => void;
}

const defaultCollection: ICollection = {
  _id: "0",
  name: "Default Collection",
  image: "",
  drinksList: [],
};

const CollectionsContext = React.createContext({} as CollectionContextProps);

const CollectionsContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [_id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [collectionsList, setCollectionsList] = useState<ICollection[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<ICollection>(defaultCollection);

  return (
    <CollectionsContext.Provider
      value={{
        collectionsList,
        setCollectionsList,
        _id,
        setId,
        name,
        setName,
        description,
        setDescription,
        image,
        setImage,
        selectedCollection,
        setSelectedCollection,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};

export { CollectionsContext, CollectionsContextProvider };
