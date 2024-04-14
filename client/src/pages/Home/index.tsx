import styles from "./Home.module.css";
import pageStyles from "pages/DrinkSetupPage/DrinkSetupPage.module.css";
import SwiperDrinksCollection from "pages/Home/SwiperDrinksCollection";
import { useContext, useEffect } from "react";
import { CollectionsContext } from "state/CollectionContext";
import { useGetCollections } from "state/hooks/useGetCollections";
import collectionsJson from "assets/collections.json";
import { httpDatasheets } from "httpApi";

export default function CollectionsCard() {
  const getCollections = useGetCollections();
  const { setCollectionsList } = useContext(CollectionsContext);

  const { collectionsList } = useContext(CollectionsContext);
  console.log(collectionsJson);

  useEffect(() => {
    Boolean(httpDatasheets)
      ? getCollections()
      : setCollectionsList(collectionsJson);
  }, []);

  return (
    <section className={`${pageStyles.card} ${styles.collections_card}`}>
      <SwiperDrinksCollection collectionsList={collectionsList} />
    </section>
  );
}
