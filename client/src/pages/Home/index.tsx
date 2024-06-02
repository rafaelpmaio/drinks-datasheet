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
    <main className={`${themeStyles.card} ${styles.collections_card}`}>
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
          730: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 2.5,
          },
          660: {
            slidesPerView: 4,
          },
          570: {
            slidesPerView: 3.5,
          },
          495: {
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 2.5,
          },
          320: {
            slidesPerView: 2,
          },
          280: {
            slidesPerView: 1.8,
          },
          0: {
            slidesPerView: 1.4,
          }
        }}
      >
        {collectionsList.map(collection => (
          <SwiperSlide key={collection._id}>
            <CollectionDisplay {...collection} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
