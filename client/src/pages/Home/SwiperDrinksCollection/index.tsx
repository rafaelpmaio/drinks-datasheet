import CollectionDisplay from "./CollectionDisplay";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ICollection } from "shared/interfaces/ICollection";
import { Navigation, Pagination, Scrollbar } from "swiper";

interface SwiperDrinksCollectionProps {
  collectionsList: ICollection[]
}

export default function SwiperDrinksCollection({collectionsList}: SwiperDrinksCollectionProps) {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, Pagination]}
      grabCursor
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      spaceBetween={30}
      breakpoints={{
        1150: {
          slidesPerView: 4,
        },
        890: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 2,
        },
      }}
    >
      {collectionsList.map(collection => (
        <SwiperSlide key={collection._id}>
          <CollectionDisplay {...collection}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
