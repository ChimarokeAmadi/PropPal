import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import OurPartners from "../components/Home/OurPartners/OurPartners";
import Future from "../components/Home/Future/Future";
import Inspire from "../components/Home/Inspire/Inspire";
import Committed from "../components/Home/Commited/Committed";
import Community from "../components/Home/Community/Community";
import Invest from "../components/Home/Invest/Invest";
import Faq from "../components/Home/Faq/Faq";
import ReadyToInvest from "../components/Home/ReadyToInvest/ReadyToInvest";

const HomePage = () => {
	return (
		<main className='mx-auto'>
			<div id='hero' className={`mx-auto`}>
				<Swiper
					pagination={{ clickable: true }}
					autoplay={{ delay: 5000 }}
					spaceBetween={0}
					slidesPerView={1}
					modules={[Pagination, Autoplay]}>
					<SwiperSlide>
						<div
							className={`bg-[url(/assets/Image.png)] bg-cover bg-center w-full h-full relative lg:bg-contain`}>
							<div className='bg-[#1E1F8C] bg-opacity-65 items-center inset-0 flex px-4 lg:pt-[237px] lg:pb-[228px]'>
								<div className='flex flex-col items-center space-y-6  justify-center  h-[412px] px-[4.5px] container lg:w-[952px] lg:h-[263px]'>
									<h1 className='text-[31px] font-extrabold text-white text-center lg:text-[76px]'>
										Real Estate Made Easy
									</h1>

									<h6 className='text-[13px] text-white text-center lg:text-[25px]'>
										We help you navigate the complexities of owning properties,
										one step at a time
									</h6>
									<div className='flex gap-4'>
										<img
											src='/assets/GoogleStore.png'
											alt=''
											className='w-[124.21px] h-[37px] lg:h-[50px] lg:w-[167.86px]'
										/>
										<img
											src='/assets/AppStore.png'
											alt=''
											className='w-[124.21px] h-[37px] lg:h-[50px] lg:w-[167.86px]'
										/>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div
							className={`bg-[url(/assets/Image2.png)] bg-cover bg-center w-full h-full relative lg:bg-contain`}>
							<div className='bg-[#1E1F8C] bg-opacity-65 items-center inset-0 flex px-4 lg:pt-[237px] lg:pb-[228px]'>
								<div className='flex flex-col items-center space-y-6  justify-center  h-[412px] px-[4.5px] container lg:w-[952px] lg:h-[263px]'>
									<h1 className='text-[31px] font-extrabold text-white text-center lg:text-[76px]'>
										Wealth Creation Made Easy
									</h1>
									<h6 className='text-[13px] text-white text-center lg:text-[25px]'>
										We help you navigate the complexities of owning properties,
										one step at a time
									</h6>
									<div className='flex gap-4'>
										<img
											src='/assets/GoogleStore.png'
											alt=''
											className='w-[124.21px] h-[37px] lg:h-[50px] lg:w-[167.86px]'
										/>
										<img
											src='/assets/AppStore.png'
											alt=''
											className='w-[124.21px] h-[37px] lg:h-[50px] lg:w-[167.86px]'
										/>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div
							className={`bg-[url(/assets/Image3.png)] bg-cover bg-center w-full h-full relative lg:bg-contain`}>
							<div className='bg-[#1E1F8C] bg-opacity-65 items-center inset-0 flex px-4 lg:pt-[237px] lg:pb-[228px]'>
								<div className='flex flex-col items-center space-y-6  justify-center  h-[412px] px-[4.5px] container lg:w-[952px] lg:h-[263px]'>
									<h1 className='text-[31px] font-extrabold text-white text-center lg:text-[76px]'>
										Your Partner in Wealth Creation
									</h1>
									<h6 className='text-[13px] text-white text-center lg:text-[25px]'>
										We help you navigate the complexities of owning properties,
										one step at a time
									</h6>
									<div className='flex gap-4'>
										<img
											src='/assets/GoogleStore.png'
											alt=''
											className='w-[124.21px] h-[37px] lg:h-[50px] lg:w-[167.86px]'
										/>
										<img
											src='/assets/AppStore.png'
											alt=''
											className='w-[124.21px] h-[37px] lg:h-[50px] lg:w-[167.86px]'
										/>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div
							className={`bg-[url(/assets/Image4.png)] bg-cover bg-center w-full h-full relative lg:bg-contain`}>
							<div className='bg-[#1E1F8C] bg-opacity-65 items-center inset-0 flex px-4 lg:pt-[237px] lg:pb-[228px]'>
								<div className='flex flex-col items-center space-y-6  justify-center  h-[412px] px-[4.5px] container lg:w-[952px] lg:h-[263px]'>
									<h1 className='text-[31px] font-extrabold text-white text-center lg:text-[76px]'>
										You’re Not Alone
									</h1>
									<h6 className='text-[13px] text-white text-center lg:text-[25px]'>
										We help you navigate the complexities of owning properties,
										one step at a time
									</h6>
									<div className='flex gap-4'>
										<img
											src='/assets/GoogleStore.png'
											alt=''
											className='w-[124.21px] h-[37px] lg:h-[50px] lg:w-[167.86px]'
										/>
										<img
											src='/assets/AppStore.png'
											alt=''
											className='w-[124.21px] h-[37px] lg:h-[50px] lg:w-[167.86px]'
										/>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>

			<OurPartners />
			<Future />
			<Inspire />
			<Committed />
			<Community />
			<Invest />
			<Faq />
			<ReadyToInvest />
		</main>
	);
};

export default HomePage;
