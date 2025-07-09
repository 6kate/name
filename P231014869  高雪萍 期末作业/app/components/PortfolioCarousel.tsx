"use client";

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/swiper-bundle.css';


type Assignment = {
  filename: string;
  name: string;
};

type PortfolioCarouselProps = {
  assignments: Assignment[];
};

export default function PortfolioCarousel({ assignments }: PortfolioCarouselProps) {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="w-full h-[300px]"
    >
      {assignments.map((assignment) => (
        <SwiperSlide key={assignment.filename} className="w-[300px] h-[250px] bg-center bg-cover">
          <Link href={`/portfolio/${assignment.filename}`}>
            <div className="flex flex-col justify-center items-center w-full h-full bg-gray-800/70 rounded-lg shadow-lg hover:bg-gray-700/90 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white text-center p-4">{assignment.name}</h2>
              <p className="text-gray-300">点击查看</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 