"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function SwiperModule() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto sm:px-16 px-7 sm:pb-44 sm:pt-32 pt-16 pb-28 lg:pt-44">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto">
              <Image
                className="object-cover object-center rounded bg-slate-400"
                alt="Umzugslift Bild 1"
                width={1600}
                height={1200}
                src="/101.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto">
              <Image
                className="object-cover object-center rounded bg-slate-400"
                alt="Umzugslift Bild 2"
                width={1600}
                height={1200}
                src="/102.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto">
              <Image
                className="object-cover object-center rounded bg-slate-400"
                alt="Umzugslift Bild 3"
                width={1600}
                height={1200}
                src="/103.jpg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
