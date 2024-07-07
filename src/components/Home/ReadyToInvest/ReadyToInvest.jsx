import React from "react";

const Benefits = [
	{
		benefit:
			"Become a part of our community of innovative investors changing the landscape of real estate.",
	},
	{
		benefit: "Explore Proppal’s diverse investment opportunities. ",
	},
	{
		benefit:
			"Learn about our co-ownership options, flexible payment plans, and	potential returns.",
	},
	{
		benefit:
			"Discuss any queries you have about PropPal’s investment experience",
	},
];

const ReadyToInvest = () => {
	return (
		<div className='container px-4 space-y-5 pb-[23px]'>
			<div className='space-y-5'>
				<p className='text-[20px] font-semibold'>Ready to Invest Confidently</p>
				<ul className='text-[13px] space-y-5'>
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
				<button className='bg-primary-300 text-white text-[13px] rounded-[10px] py-[10px] px-5'>
					Talk to an advisor
				</button>
			</div>
			<div>
				<img
					src='public/assets/Image copy.png'
					alt=''
					className='w-[343px] h-[242.73px]'
				/>
			</div>
		</div>
	);
};

export default ReadyToInvest;
