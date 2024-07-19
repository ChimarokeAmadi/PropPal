import React from "react";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Inspire = () => {
	return (
		<div id='third'>
			<Swiper
				className=''
				pagination={{ clickable: true }}
				spaceBetween={0}
				slidesPerView={1}
				modules={[Pagination]}
				onSwiper={(swiper) => console.log(swiper)}>
				<SwiperSlide>
					<div
						className=' justify-center bg-accent-300 text-white  pt-10 container px-4 pb-[70px] lg:px-[100px] lg:pb-[270px] lg:pt-[56px] '
						id='white'>
						<div className='space-y-5 flex flex-col lg:space-y-[64px] lg:w-full'>
							<p className='font-semibold text-[20px] pr-[39px] lg:text-[32px]'>
								Read The Inspiring Journeys Of Our PropPal Pioneers
							</p>

							<div className='lg:w-full'>
								<div className='space-y-4 lg:flex lg:space-x-[92px] lg:items-center lg:w-full'>
									<div className='flex items-center gap-3 lg:flex-col lg:min-w-[166px] '>
										<img
											src='/assets/Ellipse11.png'
											alt=''
											className='h-10 w-10 lg:h-[120px] lg:w-[120px]'
										/>
										<div>
											<p className='font-bold text-[10px] lg:text-[24px] lg:font-normal'>
												Sarah James
											</p>
											<p className='font-light text-[10px] lg:hidden'>
												CEO, Sherafon Hotel
											</p>
										</div>
									</div>
									<div className='lg:space-y-[17px] lg:w-full'>
										<p className='font-bold text-[13px] pr-[23px] lg:text-[22px] lg:font-normal'>
											PropPal is empowering Dreams and transforming Lives
										</p>
										<p className='text-[13px] lg:text-[18px] lg:w-full'>
											Meet Sarah, a tech entrepreneur with a keen eye for
											investments. Sarah wanted to diversify her portfolio and
											venture into real estate without the hassles of property
											management. With Proppal, she found her ideal investment
											match—a beautiful apartment in a bustling city, co-owned
											with like-minded investors.
											<br />
											<br />
											Today, Sarah enjoys passive income, hassle-free
											management, and a growing network of fellow investors.
											Meet Sarah, a tech entrepreneur with a keen eye for
											investments.
											<br />
											<br />
											Sarah wanted to diversify her portfolio and venture into
											real estate without the hassles of property management.
											With Proppal, she found her ideal investment match—a
											beautiful apartment in a bustling city, co-owned with
											like-minded investors.
											<br />
											<br />
											Today, Sarah enjoys passive income, hassle-free
											management, and a growing network of fellow investors.
											Meet Sarah, a tech entrepreneur with a keen eye for
											investments. Sarah wanted to diversify her portfolio and
											venture into real estate without the hassles of property
											management.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className=' justify-center bg-white text-accent-300  pt-10 container px-4 pb-[70px]'>
						<div className='space-y-5 flex flex-col'>
							<p className='font-semibold text-[20px] pr-[39px]'>
								Read The Inspiring Journeys Of Our PropPal Pioneers
							</p>

							<div>
								<div className='space-y-4 '>
									<div className='flex items-center gap-3'>
										<img
											src='/assets/Ellipse12.png'
											alt=''
											className='h-10 w-10'
										/>
										<div>
											<p className='font-bold text-[10px]'>Sarah James</p>
											<p className='font-light text-[10px]'>
												CEO, Sherafon Hotel
											</p>
										</div>
									</div>
									<p className='font-bold text-[13px] pr-[23px]'>
										PropPal is empowering Dreams and transforming Lives
									</p>
									<p className='text-[13px]'>
										Meet Sarah, a tech entrepreneur with a keen eye for
										investments. Sarah wanted to diversify her portfolio and
										venture into real estate without the hassles of property
										management. With Proppal, she found her ideal investment
										match—a beautiful apartment in a bustling city, co-owned
										with like-minded investors.
										<br />
										<br />
										Today, Sarah enjoys passive income, hassle-free management,
										and a growing network of fellow investors. Meet Sarah, a
										tech entrepreneur with a <br /> keen eye for investments.
										<br />
										<br />
										Sarah wanted to diversify her portfolio and venture into
										real estate without the hassles of property management. With
										Proppal, she found her ideal investment match—a beautiful
										apartment in a bustling city, co-owned with like-minded
										investors.
										<br />
										<br />
										Today, Sarah enjoys passive income, hassle-free management,
										and a growing network of fellow investors. Meet Sarah, a
										tech entrepreneur with a <br /> keen eye for investments.
										Sarah wanted to diversify her portfolio and venture into
										real estate without the hassles of property management.
									</p>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className=' justify-center bg-primary-300 text-white  pt-10 container px-4 pb-[70px]'>
						<div className='space-y-5 flex flex-col'>
							<p className='font-semibold text-[20px] pr-[39px]'>
								Read The Inspiring Journeys Of Our PropPal Pioneers
							</p>

							<div>
								<div className='space-y-4 '>
									<div className='flex items-center gap-3'>
										<img
											src='/assets/Ellipse11.png'
											alt=''
											className='h-10 w-10'
										/>
										<div>
											<p className='font-bold text-[10px]'>Sarah James</p>
											<p className='font-light text-[10px]'>
												CEO, Sherafon Hotel
											</p>
										</div>
									</div>
									<p className='font-bold text-[13px] pr-[23px]'>
										PropPal is empowering Dreams and transforming Lives
									</p>
									<p className='text-[13px]'>
										Meet Sarah, a tech entrepreneur with a keen eye for
										investments. Sarah wanted to diversify her portfolio and
										venture into real estate without the hassles of property
										management. With Proppal, she found her ideal investment
										match—a beautiful apartment in a bustling city, co-owned
										with like-minded investors.
										<br />
										<br />
										Today, Sarah enjoys passive income, hassle-free management,
										and a growing network of fellow investors. Meet Sarah, a
										tech entrepreneur with a <br /> keen eye for investments.
										<br />
										<br />
										Sarah wanted to diversify her portfolio and venture into
										real estate without the hassles of property management. With
										Proppal, she found her ideal investment match—a beautiful
										apartment in a bustling city, co-owned with like-minded
										investors.
										<br />
										<br />
										Today, Sarah enjoys passive income, hassle-free management,
										and a growing network of fellow investors. Meet Sarah, a
										tech entrepreneur with a <br /> keen eye for investments.
										Sarah wanted to diversify her portfolio and venture into
										real estate without the hassles of property management.
									</p>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Inspire;
