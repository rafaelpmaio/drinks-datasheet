import CollectionDisplay from "./CollectionDisplay";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ICollection } from "shared/interfaces/ICollection";
import { Navigation, Pagination, Scrollbar } from "swiper";

interface SwiperDrinksCollectionProps {
  collectionsList: ICollection[]
}

export default function SwiperDrinksCollection({ collectionsList }: SwiperDrinksCollectionProps) {
  return (
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
  );
}
