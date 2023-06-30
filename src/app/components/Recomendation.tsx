"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import Card from '@/app/components/Card'
import { FreeMode, Pagination } from "swiper";
import { useStore } from "../store/zustand";
import "swiper/css";
import "swiper/css/free-mode";

export default function Recomendations() {
  const { recomendations } = useStore()
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={15}
        draggable={true}
        grabCursor={true}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {recomendations.map(recomend => (
            <SwiperSlide style={{width: '240px'}} key={recomend.id}>
                <Card key={recomend.id} movie={recomend} />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
