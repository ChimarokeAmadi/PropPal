import React from "react";

const Invest = () => {
	return (
		<div className='container px-4 bg-primary-300 text-white pt-10 space-y-5 flex flex-col'>
			<div className='space-y-4 flex flex-col '>
				<div className=''>
					<p className='text-[10px] font-normal'>The PropPal’s App</p>
					<p className='font-semibold text-[20px]'>Invest in Your Dreams</p>
				</div>
				<div className=''>
					<ul className='text-[13px]'>
						<li className='h-[36px]'>Invest in real estate</li>
						<li className='h-[36px]'>Create a legacy</li>
						<li className='h-[36px]'> Secure your family's future.</li>
					</ul>
				</div>
				<div className='flex gap-3 w-fit self-center'>
					<img
						src='public/assets/GoogleStore.png'
						alt=''
						className='h-[40px] w-[134.29px]'
					/>
					<img
						src='public/assets/AppStore.png'
						alt=''
						className='h-[40px] w-[134.29px]'
					/>
				</div>
			</div>
			<div className='mx-auto'>
				<img src='public/assets/Mockup1.png' alt='' className='w-[343px]' />
			</div>
		</div>
	);
};

export default Invest;
