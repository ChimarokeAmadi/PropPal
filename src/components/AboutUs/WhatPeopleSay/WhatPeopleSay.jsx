import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

const WhatPeopleSay = () => {
	return (
		<div className='container px-5 space-y-[26px] pb-[23.55px]'>
			<div className=''>
				<p className='text-[20px] font-semibold text-center'>
					What People Say About PropPal
				</p>
				<p className='text-[13px] text-center'>Take their word for it.</p>
			</div>

			<div id='about'>
				<Swiper
					className='h-[350px]'
					pagination={{ clickable: true }}
					slidesPerView={1}
					spaceBetween={20}
					modules={[Pagination]}>
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
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default WhatPeopleSay;
