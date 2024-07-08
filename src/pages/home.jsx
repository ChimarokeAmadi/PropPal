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
	const Features = [
		{
			title: "Real Estate Made Easy",
			img: "/assets/Image.png",
		},
		{
			title: "Wealth Creation Made Easy",
			img: "/assets/Image2.png",
		},
		{
			title: "Your Partner in Wealth Creation",
			img: "/assets/Image3.png",
		},
		{
			title: "You’re Not Alone",
			img: "/assets/Image4.png",
		},
	];

	return (
		<main className='mx-auto'>
			<div id='hero' className='mx-auto'>
				<Swiper
					pagination={{ clickable: true }}
					autoplay={{ delay: 5000 }}
					spaceBetween={0}
					slidesPerView={1}
					modules={[Pagination, Autoplay]}
					onSwiper={(swiper) => console.log(swiper)}>
					{Features.map((data, index) => (
						<SwiperSlide key={index}>
							<div
								className={`bg-[url(${data.img})] bg-cover bg-center w-full h-full relative `}>
								<div className='bg-[#1E1F8C] bg-opacity-65 items-center inset-0 flex px-4 lg:pt-[237px] lg:pb-[228px]'>
									<div className='flex flex-col items-center space-y-6  justify-center  h-[412px] px-[4.5px] container lg:w-[952px] lg:h-[263px]'>
										<h1 className='text-[31px] font-extrabold text-white text-center lg:text-[76px]'>
											{data.title}
										</h1>
										<h6 className='text-[13px] text-white text-center lg:text-[25px]'>
											We help you navigate the complexities of owning
											properties, one step at a time
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
					))}
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
