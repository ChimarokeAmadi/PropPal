import React from "react";

const Invest = () => {
	return (
		<div className='container px-4 bg-primary-300 text-white pt-10 space-y-5 flex flex-col lg:flex-row-reverse lg:space-y-0 lg:justify-center lg:gap-[100px] lg:pt-[120px] lg:items-center lg:pl-[150px] lg:pr-[201px]'>
			<div className='space-y-4 flex flex-col lg:space-y-5'>
				<div className=''>
					<p className='text-[10px] font-normal lg:text-[20px]'>
						The PropPal’s App
					</p>
					<p className='font-semibold text-[20px] lg:font-medium lg:text-[36px]'>
						Invest in Your Dreams
					</p>
				</div>
				<div className=''>
					<ul className='text-[13px] lg:text-[20px]'>
						<li className='h-[36px]'>Invest in real estate</li>
						<li className='h-[36px]'>Create a legacy</li>
						<li className='h-[36px]'> Secure your family's future.</li>
					</ul>
				</div>
				<div className='flex gap-3 w-fit'>
					<img
						src='/assets/GoogleStore.png'
						alt=''
						className='h-[40px] w-[134.29px] lg:h-[50px] lg:w-[167.86px]'
					/>
					<img
						src='/assets/AppStore.png'
						alt=''
						className='h-[40px] w-[134.29px] lg:h-[50px] lg:w-[167.86px]'
					/>
				</div>
			</div>
			<div className='lg:w-fit'>
				<img
					src='/assets/Mockup1.png'
					alt=''
					className='w-[343px] lg:w-[539px]'
				/>
			</div>
		</div>
	);
};

export default Invest;
