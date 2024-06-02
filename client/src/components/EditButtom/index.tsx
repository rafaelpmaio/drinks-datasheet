import { BsPencilSquare } from "react-icons/bs";
import { useContext } from "react";
import styles from "./EditButtom.module.scss";
import { httpDatasheets } from "httpApi";
import { ICollection } from "shared/interfaces/ICollection";
import NewCollectionInputs from "components/NewCollectionInputs";
import { CollectionsContext } from "state/CollectionContext";
import { ServerStatusContext } from "state/ServerSatusContext";
import DialogBox from "components/DialogBox";

interface EditButtonProps {
  collection: ICollection;
}

const updateCollectionAtDb = (_id: string, {name, description, image} : any) => {
  httpDatasheets.put(`collections/${_id}`, {
    name: name,
    description: description,
    image: image,
  });
}

export default function EditButton({ collection }: EditButtonProps) {
  const { name, description, image, collectionsList, setCollectionsList } =
    useContext(CollectionsContext);
  const { isOnline } = useContext(ServerStatusContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!isOnline) {
      event.preventDefault();
      const updatedList = collectionsList.map((col) => {
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
      setCollectionsList(updatedList);
      return;
    }
    updateCollectionAtDb(collection._id, {name, description, image} )
  };

  return (
    <DialogBox 
      title={`Edit ${collection.name} Collection`}
      submit
      buttonText={<BsPencilSquare />}
      className={styles.editButton}
      contentText={<NewCollectionInputs />}
      handleSubmit={handleSubmit}/>
  );
}
