import { DynamicHeaderContext } from "state/DynamicHeaderContext";
import styles from "./DynamicHeader.module.scss";
import themeStyles from "styles/theme.module.scss";
import { useContext } from "react";
import { handleImageFormat } from "shared/utils/handleImageFormat";

export default function DynamicHeader() {
  const { headerData } = useContext(DynamicHeaderContext);
  const {
    collectionId,
    collectionName,
    collectionImage,
    collectionDescription,
  } = headerData;

  return (
    <section className={`${themeStyles.card} ${styles.header}`}>
      <img
        className={`${styles.header_img} ${
          collectionId === 0 ? styles.default_img : ''
        }`}
        src={handleImageFormat(collectionImage, "collections")}
        alt={`collection ${collectionName}`}
      />
      <span className={styles.header_infos}>
        <h1 className={styles.collection_name}>{collectionName}</h1>
        <p className={styles.collection_description}>{collectionDescription}</p>
      </span>
    </section>
  );
}
