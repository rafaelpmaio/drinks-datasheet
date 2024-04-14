import { DynamicHeaderContext } from "state/DynamicHeaderContext";
import styles from "./DynamicHeader.module.css";
import pageStyles from "pages/DrinkSetupPage/DrinkSetupPage.module.css";
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
    <section className={`${pageStyles.card} ${styles.header}`}>
      <img
        className={`${styles.header_img} ${
          collectionId === 0 ? styles.default_img : styles.collection_img
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
