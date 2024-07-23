import React from "react";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Reviews from "../Reviews/Reviews";

const WhatPeopleSay = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1024px)",
	});

	return (
		<div className='container px-5 space-y-[26px] pb-[23.55px] lg:pt-[100px] lg:pb-[67px] lg:space-y-10'>
			<div className='lg:space-y-6'>
				<p className='text-[20px] font-semibold text-center lg:text-[36px]'>
					What People Say About PropPal
				</p>
				<p className='text-[13px] text-center lg:text-[20px]'>
					Take their word for it.
				</p>
			</div>

			<div id='about'>
				<Swiper
					className='h-[350px] lg:h-[400px]'
					pagination={{ clickable: true }}
					slidesPerView={isDesktopOrLaptop ? 2 : 1}
					spaceBetween={20}
					modules={[Navigation, Pagination]}>
					{Reviews.map((data, index) => (
						<SwiperSlide key={index}>
							<div className='border border-[#1E1E1E80] pl-[17px] pr-5 space-y-6 pb-[43px] pt-[33px] lg:p-8'>
								<div className='flex gap-1'>
									<img src={data.star} alt='' className='size-3 lg:size-5' />
									<img src={data.star} alt='' className='size-3 lg:size-5' />
									<img src={data.star} alt='' className='size-3 lg:size-5' />
									<img src={data.star} alt='' className='size-3 lg:size-5' />
									<img src={data.star} alt='' className='size-3 lg:size-5' />
								</div>
								<div className='w-[299px] space-y-6 lg:w-[492px]'>
									<p className='text-[13px] lg:text-[18px]'>{data.text}</p>
									<div className='flex gap-5'>
										<img src={data.photo} alt='' className='size-[56px]' />
										<div className='self-center'>
											<p className='text-[13px] font-medium lg:font-semibold lg:text-[16px]'>
												{data.Name}
											</p>
											<p className='text-[10px] italic lg:text-[16px]'>
												{data.company}
											</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}

					{/* <SwiperSlide>
						<div className='border border-[#1E1E1E80] pl-[17px] pr-5 space-y-6 pb-[43px] pt-[33px]'>
							<div className='flex gap-1'>
								<img
									src='/assets/AboutUS/VectorStar.png'
									alt=''
									className='size-3'
								/>
								<img
									src='/assets/AboutUS/VectorStar.png'
									alt=''
									className='size-3'
								/>
								<img
									src='/assets/AboutUS/VectorStar.png'
									alt=''
									className='size-3'
								/>
								<img
									src='/assets/AboutUS/VectorStar.png'
									alt=''
									className='size-3'
								/>
								<img
									src='/assets/AboutUS/VectorStar.png'
									alt=''
									className='size-3'
								/>
							</div>
							<div className='w-[299px] space-y-6'>
								<p className='text-[13px]'>
									I found my tribe at PropPal's Community! The insights shared
									here are priceless. I've made profitable connections and
									learned strategies that boosted my investments. If you're
									serious about real estate, this community is a must!
								</p>
								<div className='flex gap-5'>
									<img
										src='/assets/AboutUS/Ellipse1.png'
										alt=''
										className='size-[56px]'
									/>
									<div className='self-center'>
										<p className='text-[13px] font-medium'>Name Surname</p>
										<p className='text-[10px]'>Position, Company name</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='border border-[#1E1E1E80] pl-[17px] pr-5 space-y-6 pb-[43px] pt-[33px]'>
							<div className='flex gap-1'>
								<img
									src='/assets/AboutUS/VectorStar.png'
									alt=''
									className='size-3'
								/>
								<img
									src='/assets/AboutUS/VectorStar.png'
									alt=''
									className='size-3'
								/>
								<img
									src='/assets/AboutUS/VectorStar.png'
									alt=''
									className='size-3'
								/>
								<img
									src='/assets/AboutUS/VectorStar.png'
									alt=''
									className='size-3'
								/>
								<img
									src='/assets/AboutUS/VectorStar.png'
									alt=''
									className='size-3'
								/>
							</div>
							<div className='w-[299px] space-y-6'>
								<p className='text-[13px]'>
									I found my tribe at PropPal's Community! The insights shared
									here are priceless. I've made profitable connections and
									learned strategies that boosted my investments. If you're
									serious about real estate, this community is a must!
								</p>
								<div className='flex gap-5'>
									<img
										src='/assets/AboutUS/Ellipse1.png'
										alt=''
										className='size-[56px]'
									/>
									<div className='self-center'>
										<p className='text-[13px] font-medium'>Name Surname</p>
										<p className='text-[10px]'>Position, Company name</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide> */}
				</Swiper>
			</div>
		</div>
	);
};

export default WhatPeopleSay;
