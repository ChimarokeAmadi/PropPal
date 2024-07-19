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
					<div className='container px-5 pt-[84px] pb-[68px]'>
						<div className='text-white'>
							<p className='text-[31px] font-bold'>
								Elevating Real Estate Investment through Innovation and
								Expertise
							</p>
							<p className='text-[13px]'>
								We stand at the forefront of a digital evolution, empowering
								individuals and businesses to explore new horizons in property
								ownership and investment. Our vision is to simplify the complex
								world of real estate
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='container px-[19.5px] py-10'>
				<div className='space-y-3'>
					<p className='font-semibold text-[20px] text-center'>
						Why we do what we do
					</p>
					<img src='/assets/AboutUS/Team-Images.png' alt='' />
					<p className='text-[13px]'>
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
