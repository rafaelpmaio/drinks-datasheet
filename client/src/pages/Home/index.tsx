import styles from "./Home.module.scss";
import pageStyles from "pages/DrinkSetupPage/DrinkSetupPage.module.scss";
import SwiperDrinksCollection from "pages/Home/SwiperDrinksCollection";
import { useContext, useEffect } from "react";
import { CollectionsContext } from "state/CollectionContext";
import { useGetCollections } from "state/hooks/useGetCollections";

export default function CollectionsCard() {
  const getCollections = useGetCollections();

  const { collectionsList } = useContext(CollectionsContext);

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <section className={`${pageStyles.card} ${styles.collections_card}`}>
      <SwiperDrinksCollection collectionsList={collectionsList} />
    </section>
  );
}
