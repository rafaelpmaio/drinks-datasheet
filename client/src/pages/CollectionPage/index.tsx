import DrinkDisplay from "pages/CollectionPage/DrinkDisplay";
import pageStyles from "pages/DrinkSetupPage/DrinkSetupPage.module.scss";
import styles from "./CollectionPage.module.scss";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CollectionsContext } from "state/CollectionContext";
import getFromList from "shared/utils/getFromList";

export default function CollectionPage() {
  const { collectionsList } = useContext(CollectionsContext);

  const params = useParams();
  let paramsCollectionId = params.id;

  let collection = getFromList(paramsCollectionId, collectionsList);

  if (!collection) {
    collection = {
      _id: "0",
      name: "collection not found",
      drinksList: [],
      image: "",
    };
  }

  let { drinksList, _id } = collection;

  return (
    <section className={`${styles.collectionPage} ${pageStyles.card}`}>
      {drinksList.length > 0 ? (
        drinksList.map((drink) => (
          <DrinkDisplay collectionId={_id} drink={drink} />
        ))
      ) : (
        <Link to="/new_drink" className={styles.link_first_drink}>
          <p>let's start with the first drink?</p>
        </Link>
      )}
    </section>
  );
}
