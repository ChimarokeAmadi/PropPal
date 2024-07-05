import React from "react";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Inspire = () => {
	return (
		<div className='container flex justify-center'>
			<Swiper
				className='h-[281px]'
				pagination={{ clickable: true }}
				spaceBetween={0}
				slidesPerView={1}
				modules={[Pagination]}
				onSwiper={(swiper) => console.log(swiper)}>
				<SwiperSlide className='h-[688px]'></SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Inspire;
