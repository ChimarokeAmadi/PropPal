import React from "react";

const Committed = () => {
	return (
		<div className='container px-4 py-10'>
			<div className='space-y-5'>
				<div className='flex flex-col items-center space-y-3'>
					<p className='font-semibold text-[20px] pr-[10px]'>
						We are Committed to your Peace of Mind
					</p>
					<p className='text-[13px] font-normal'>
						At PropPal, your dreams are at the heart of <br /> everything we do.
						We commit to guiding you with <br />
						unwavering dedication, transparent processes, and innovative
						solutions. Your trust is our driving force. With us, embark on your
						investment journey with confidence, knowing that your aspirations
						are safeguarded every step of the way.
					</p>
				</div>
				<img
					src='public/assets/pexels.png'
					alt=''
					className='w-[343px] h-[308.7px]  rounded-[20px] mx-auto'
				/>
			</div>
		</div>
	);
};

export default Committed;
