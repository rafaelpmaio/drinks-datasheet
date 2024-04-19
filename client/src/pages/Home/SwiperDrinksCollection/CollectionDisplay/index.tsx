import styles from "./CollectionDisplay.module.scss";
import pageStyles from "pages/DrinkSetupPage/DrinkSetupPage.module.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import headerInfosGetterFromDiv from "components/MainHeader/DynamicHeader/headerInfosGetterFromDiv";
import { DynamicHeaderContext } from "state/DynamicHeaderContext";
import { handleImageFormat } from "shared/utils/handleImageFormat";
import { ICollection } from "shared/interfaces/ICollection";
import removeSpecialCharsFromString from "shared/utils/removeSpecialCharsFromString";
import EditButton from "components/EditButtom";

export default function CollectionDisplay({
  name,
  image,
  _id,
  description,
}: ICollection) {
  const { setHeaderData: setHeaderInfos } = useContext(DynamicHeaderContext);
  const collectionHtmlDivElement = React.useRef<HTMLDivElement>(null);

  const handleMouseHover = () => {
    const header = headerInfosGetterFromDiv(collectionHtmlDivElement);
    setHeaderInfos(header);
  };

  return (
    <div
      className={`${pageStyles.card} ${styles.collection_display}`}
      ref={collectionHtmlDivElement}
      onMouseEnter={handleMouseHover}
    >
      <Link to={`/collection/${_id}#${removeSpecialCharsFromString(name)}`}>
        <picture>
          <source
            type="image/webp"
            srcSet={handleImageFormat(image, "collections")}
          />
          <img
            className={`${styles.collection_img} ${
              _id === "0" ? styles.default_img : styles.selected_collection_img
            }`}
            src={handleImageFormat(image, "collections")}
            alt={`${name}`}
          />
        </picture>

        <h2 className={styles.collection_name}>{name}</h2>
        <p>{description}</p>
      </Link>
      <EditButton
        collection={{ _id, name, description, image, drinksList: [] }}
      />
    </div>
  );
}
