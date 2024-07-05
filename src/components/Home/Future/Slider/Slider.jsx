import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
	return (
		<div id='second' className='h-[281px] container'>
			<Swiper
				className='h-[281px]'
				pagination={{ clickable: true }}
				spaceBetween={0}
				slidesPerView={1}
				modules={[Pagination]}
				onSwiper={(swiper) => console.log(swiper)}>
				<SwiperSlide className='h-[281px]'>
					<div className='border-[1px] border-primary-300 rounded-[20px] py-5 pl-5 pr-[5px] width-[343px]'>
						<div className='flex items center '>
							<div className='flex flex-col space-y-6'>
								<img
									src='public/assets/Untitled21.png'
									alt=''
									className='h-[60px] w-[60px]'
								/>
								<div className='flex flex-col space-y-4'>
									<p className='font-semibold text-[18px]'>
										Effortless Property Ownership
									</p>
									<p className='text-[13px]'>
										We simplify property ownership, enabling you to navigate the
										complexities effortlessly. With intuitive tools and expert
										guidance, investing in real estate becomes seamless.
									</p>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='h-[281px]'>
					<div className='border-[1px] border-primary-300 rounded-[20px] py-5 pl-5 pr-[5px] width-[343px]'>
						<div className='flex items center'>
							<div className='flex flex-col space-y-6'>
								<img
									src='public/assets/Untitled21.png'
									alt=''
									className='h-[60px] w-[60px]'
								/>
								<div className='flex flex-col space-y-4'>
									<p className='font-semibold text-[18px]'>
										Flexible Investment Strategies{" "}
									</p>
									<p className='text-[13px]'>
										Whether outright buying, co-owning, or exploring profitable
										resale, investors enjoy unparalleled flexibility and
										control.
									</p>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='h-[281px]'>
					<div className='border-[1px] border-primary-300 rounded-[20px] py-5 pl-5 pr-[5px] width-[343px]'>
						<div className='flex  items center '>
							<div className='flex flex-col space-y-6'>
								<img
									src='public/assets/Untitled21.png'
									alt=''
									className='h-[60px] w-[60px]'
								/>
								<div className='flex flex-col space-y-4'>
									<p className='font-semibold text-[18px]'>
										Empowering Financial Tools
									</p>
									<p className='text-[13px]'>
										From smart calculators predicting growth rates to a
										dedicated wallet feature, making informed financial
										decisions is at the your fingertips.
									</p>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='h-[281px]'>
					<div className='border-[1px] border-primary-300 rounded-[20px] py-5 pl-5 pr-[5px] width-[343px]'>
						<div className='flex  items center '>
							<div className='flex flex-col space-y-6'>
								<img
									src='public/assets/Untitled21.png'
									alt=''
									className='h-[60px] w-[60px]'
								/>
								<div className='flex flex-col space-y-4'>
									<p className='font-semibold text-[18px]'>
										Community & Expert Support
									</p>
									<p className='text-[13px]'>
										Through forums, webinars, and expert advice, investors
										connect, learn, and grow together. PropPal ensures no one
										navigates their real estate journey alone.
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

export default Slider;
