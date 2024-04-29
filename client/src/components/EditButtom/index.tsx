import { BsPencilSquare } from "react-icons/bs";
import { useContext } from "react";
import styles from "./EditButtom.module.scss";
import { httpDatasheets } from "httpApi";
import { ICollection } from "shared/interfaces/ICollection";
import CollectionInfosInputs from "components/CollectionInfosInputs";
import { CollectionsContext } from "state/CollectionContext";
import { ServerStatusContext } from "state/ServerSatusContext";
import DialogBox from "components/DialogBox";

interface EditButtonProps {
  collection: ICollection;
}

export default function EditButton({ collection }: EditButtonProps) {
  const { name, description, image, collectionsList, setCollectionsList } =
    useContext(CollectionsContext);
  const { isOnline } = useContext(ServerStatusContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    
    if (!isOnline) {
      event.preventDefault();
      const updatedCollection = collectionsList.map((col) => {
        if (col._id === collection._id) {
          return {
            ...col,
            name,
            description,
            image: image ? image : col.image,
          };
        }
        return col;
      });
      setCollectionsList(updatedCollection);
      return;
    }

    httpDatasheets.put(`collections/${collection._id}`, {
      name: name,
      description: description,
      image: image,
    });
  };

  return (
    <DialogBox 
      title={`Edit ${collection.name} Collection`}
      buttonText={<BsPencilSquare />}
      className={styles.editButton}
      contentText={<CollectionInfosInputs />}
      handleSubmit={handleSubmit}/>
  );
}
