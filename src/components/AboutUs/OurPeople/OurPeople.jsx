import React from "react";

const OurPeople = () => {
	return (
		<div className='container pl-5 pr-[19px] pb-10 lg:bg-[#F2EFEF] lg:px-[103px] lg:pb-[140px]'>
			<div className='space-y-[3px] lg:space-y-[50px]'>
				<p className='text-[20px] font-semibold text-center lg:text-[36px]'>
					Our People
				</p>
				<div className='space-y-10 lg:space-y-0 lg:flex lg:gap-[109px]  lg:w-full'>
					<img
						src='/assets/AboutUS/Team-Images.png'
						alt=''
						className='lg:w-[587px] lg:h-[496px]'
					/>
					<p className='text-[13px] lg:text-[20px] lg:w-full'>
						At Proppal, our success is driven by the diverse and talented
						individuals who make up our team. We believe in the power of
						collaboration, innovation, and a shared passion for transforming
						real estate experiences. <br />
						From our visionary leaders to the dedicated professionals across
						various departments, each member of our team plays a crucial role in
						shaping Proppal's journey. We are united by a commitment to
						excellence and a belief in the positive impact of what we do. <br />
						Our PropPal team are the —innovators, problem-solvers, and real
						estate enthusiasts working together to redefine the way you
						experience the property market.
					</p>
				</div>
			</div>
		</div>
	);
};

export default OurPeople;
