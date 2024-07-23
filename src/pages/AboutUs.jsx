import React from "react";
import OurPartners from "@/components/Home/OurPartners/OurPartners";
import OurCulture from "@/components/AboutUs/OurCulture/OurCulture";
import OurPeople from "@/components/AboutUs/OurPeople/OurPeople";
import WhatPeopleSay from "@/components/AboutUs/WhatPeopleSay/WhatPeopleSay";
import Invest from "@/components/Home/Invest/Invest";

const AboutUsPage = () => {
	return (
		<>
			<div className='bg-[url(/assets/AboutUS/About-us.png)] bg-cover'>
				<div className='bg-[#1E1F8C99] bg-opacity-60'>
					<div className='container px-5 pt-[84px] pb-[68px] lg:pt-[267px] lg:pb-[268px]'>
						<div className='text-white lg:text-center lg:w-[1003px] lg:mx-auto lg:space-y-5'>
							<p className='text-[31px] font-bold lg:text-[36px] lg:text-center lg:px-[123px] '>
								Elevating Real Estate Investment through Innovation and
								Expertise
							</p>
							<p className='text-[13px] lg:text-[20px] font-normal lg:text-center'>
								We stand at the forefront of a digital evolution, empowering
								individuals and businesses to explore new horizons in property
								ownership and investment. Our vision is to simplify the complex
								world of real estate
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='container px-[19.5px] py-10 lg:flex gap-[109px] lg:p-[100px]'>
				<div className='space-y-3 lg:w-[544px]'>
					<p className='font-semibold text-[20px] text-center lg:text-left lg:font-medium lg:text-[36px]'>
						Why we do what we do
					</p>
					<img
						src='/assets/AboutUS/Team-Images.png'
						alt=''
						className='inline-block lg:hidden'
					/>
					<p className='text-[13px] lg:text-[20px] lg:mb-[5px]'>
						At Proppal, our passion lies in democratizing real estate
						investment. We believe that financial empowerment should know no
						boundaries. The traditional barriers to property ownership, the
						complexities of investments, and the lack of transparent pathways
						have often deterred aspiring investors. We're here to change that
						narrative.
						<br />
						<br />
						We envision a future where everyone, regardless of their background
						or financial status, can participate in the wealth-building
						potential of real estate. We are driven by the belief that
						co-ownership isn't just a transaction; it's a pathway to
						generational legacies, to dreams realized, and communities
						strengthened. Proppal is a step toward a brighter, financially
						secure future.
					</p>
				</div>
				<div className='hidden lg:inline-block w-[587px] h-[496px]'>
					<img
						src='/assets/AboutUS/Team-Images.png'
						alt=''
						className='h-full w-full'
					/>
				</div>
			</div>

			<div className=''>
				<OurPartners />
			</div>

			<div className=''>
				<OurCulture />
			</div>

			<div className=''>
				<OurPeople />
			</div>

			<div className=''>
				<WhatPeopleSay />
			</div>

			<div className=''>
				<Invest />
			</div>
		</>
	);
};

export default AboutUsPage;
