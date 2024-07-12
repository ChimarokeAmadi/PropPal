import React from "react";

const Committed = () => {
	return (
		<div className='container px-4 py-10 lg:pt-[100px] lg:px-[141.5px] lg:pb-[167px]'>
			<div className='space-y-5 lg:flex lg:flex-row-reverse lg:h-[454px] lg:space-y-0 lg:gap-[100px]'>
				<div className='flex flex-col items-center space-y-3 lg:w-[557px] lg:items-start '>
					<p className='font-semibold text-[20px] pr-[10px] lg:text-[36px] lg:font-medium'>
						We are Committed to your Peace of Mind
					</p>
					<p className='text-[13px] font-normal lg:text-[20px]'>
						At PropPal, your dreams are at the heart of everything we do. We
						commit to guiding you with unwavering dedication, transparent
						processes, and innovative solutions. Your trust is our driving
						force. With us, embark on your investment journey with confidence,
						knowing that your aspirations are safeguarded every step of the way.
					</p>
				</div>
				<img
					src='/assets/pexels.png'
					alt=''
					className='w-[343px] h-[308.7px]  rounded-[20px] lg:w-[500px] lg:h-[454px]'
				/>
			</div>
		</div>
	);
};

export default Committed;
