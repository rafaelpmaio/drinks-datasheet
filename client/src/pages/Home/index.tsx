import styles from "./Home.module.scss";
import themeStyles from "styles/theme.module.scss";
import { useContext, useEffect } from "react";
import { CollectionsContext } from "state/CollectionContext";
import { useGetCollections } from "state/hooks/useGetCollections";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import CollectionDisplay from "./CollectionDisplay";
import "swiper/swiper-bundle.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CollectionsCard() {
  const getCollections = useGetCollections();

  const { collectionsList } = useContext(CollectionsContext);

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <section className={`${themeStyles.card} ${styles.collections_card}`}>
      <Swiper
        grabCursor
        spaceBetween={35}
        modules={[Navigation, Scrollbar]}
        breakpoints={{
          1200: {
            slidesPerView: 4.5,
          },
          960: {
            slidesPerView: 3.3,
          },
          830: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 2.3,
          },
          580: {
            slidesPerView: 3.3,
          },
          450: {
            slidesPerView: 2.5,
          },
          280: {
            slidesPerView: 1.5,
          }
        }}
      >
        {collectionsList.map(collection => (
          <SwiperSlide key={collection._id}>
            <CollectionDisplay {...collection} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
