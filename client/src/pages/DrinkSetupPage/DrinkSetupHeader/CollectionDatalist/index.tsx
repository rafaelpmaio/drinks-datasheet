import styles from "./CollectionDatalist.module.scss";
import { useContext } from "react";
import Select from "components/Select";
import { CollectionsContext } from "state/CollectionContext";
import { handleImageFormat } from "shared/utils/handleImageFormat";
import getFromList from "shared/utils/getFromList";

export default function CollectionDatalist() {
  const { collectionsList, selectedCollection, setSelectedCollection } =
    useContext(CollectionsContext);

  const onChangeHandler = (selectedId: string) => {
    const collection = getFromList(selectedId, collectionsList);
    if (collection) setSelectedCollection(collection);
  };

  return (
    <div className={styles.collection_datalist_div}>
      <img
        className={`${styles.drink_header_image} ${
          selectedCollection._id === null
            ? styles.default_img
            : styles.collection_img
        }`}
        src={handleImageFormat(selectedCollection.image, "collections")}
        alt={`${selectedCollection.name}`}
      />
      <Select
        defaultOption="select a collection"
        arr={collectionsList}
        onChangeHandler={onChangeHandler}
        className={styles.select}
      />
    </div>
  );
}
