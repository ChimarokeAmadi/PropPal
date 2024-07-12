import React from "react";
import Benefits from "@/components/benefits/benefits";

const ReadyToInvest = () => {
	return (
		<div className='container px-4 space-y-5 pb-[23px] lg:flex lg:p-[100px]  lg:space-y-0 lg:gap-[80px] lg:justify-center'>
			<div className='space-y-5 lg:space-y-8'>
				<p className='text-[20px] font-semibold lg:font-medium lg:text-[36px]'>
					Ready to Invest Confidently
				</p>
				<ul className='text-[13px] space-y-5 lg:text-[15px] lg:space-y-8'>
					{Benefits.map((data, index) => (
						<li key={index} className='relative before:absolute pl-[44px]'>
							{data.benefit}
							<img
								src='public/assets/Icon.png'
								alt=''
								className='absolute top-0 left-0 h-5 w-5'
							/>
						</li>
					))}
				</ul>
				<button className='bg-primary-300 text-white text-[13px] rounded-[10px] py-[10px] px-5 lg:text-[18px]'>
					Talk to an advisor
				</button>
			</div>
			<div className='w-[343px] h-[242.73px] lg:min-w-[580px] lg:h-[411px]'>
				<img
					src='public/assets/Image copy.png'
					alt=''
					className='w-full h-full'
				/>
			</div>
		</div>
	);
};

export default ReadyToInvest;
