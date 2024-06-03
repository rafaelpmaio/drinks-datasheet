import styles from "./CollectionDatalist.module.scss";
import themeStyles from "styles/theme.module.scss";
import { useContext, useEffect } from "react";
import Select from "components/Select";
import { CollectionsContext, defaultCollection } from "state/CollectionContext";
import { handleImageFormat } from "shared/utils/handleImageFormat";
import getFromList from "shared/utils/getFromList";

export default function CollectionDatalist() {
  const { collectionsList, selectedCollection, setSelectedCollection } =
    useContext(CollectionsContext);
    useEffect(() => {setSelectedCollection(defaultCollection)}, [])

  const onChangeHandler = (selectedId: string) => {
    const collection = getFromList(selectedId, collectionsList);
    if (collection) setSelectedCollection(collection);
  };

  return (
    <div className={`${styles.collection_datalist_div} ${themeStyles.card}`}>
      <img
        className={`${styles.collection_img} ${selectedCollection._id === "0" && styles.default_img}`}
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
