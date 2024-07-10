import React from "react";
import Benefits from "@/components/benefits/benefits";

const ReadyToInvest = () => {
	return (
		<div className='container  '>
			<div className='bg-[url(public/assets/Learn/VectorBg.png)] pt-[29px] pb-[45.9px] px-5 space-y-5 lg:space-y-0 lg:flex lg:gap-20 lg:h-fit lg:py-[100px] lg:px-[100px]'>
				<div className='space-y-8 py-2 '>
					<p className='text-[20px] font-semibold lg:font-medium lg:text-[36px]'>
						Ready to Invest Confidently
					</p>
					<ul className='text-[13px] space-y-8 lg:text-[15px]  '>
						{Benefits.map((data, index) => (
							<li key={index} className='relative before:absolute pl-[28px]'>
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
				<div className='w-full  lg:h-[411px] lg:w-[580px]'>
					<img
						src='public/assets/Image copy.png'
						alt=''
						className='w-full h-full'
					/>
				</div>
			</div>
		</div>
	);
};

export default ReadyToInvest;
