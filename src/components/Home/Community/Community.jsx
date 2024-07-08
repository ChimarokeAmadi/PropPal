import React from "react";

const Community = () => {
	return (
		<div className='container px-4 lg:px-[103px]'>
			<div className='space-y-5 lg:flex lg:space-y-0 lg:gap-[79px] lg:mx-auto'>
				<div className='space-y-3 lg:w-[557px] lg:space-y-6'>
					<p className='font-semibold text-[20px] lg:font-medium lg:text-[36px]'>
						Join The Propal Community
					</p>
					<p className='text-[13px] lg:text-[20px]'>
						Real estate investment is not just about transactions; it's about
						building lasting connections and growing together. Our Co-Ownership
						Community is a vibrant space where passionate investors like you
						come together to share knowledge, exchange ideas, and embark on a
						collective journey toward financial empowerment.
					</p>
					<button className='bg-primary-300 text-white rounded-[10px] px-5 py-[10px] text-[13px] font-semibold lg:text-[18px]'>
						Join Our Community
					</button>
				</div>
				<div className='w-[343px] h-[329.79px] lg:h-[606px] lg:w-[597px]'>
					<img
						src='public/assets/Group26865.png'
						alt=''
						className='w-full h-full'
					/>
				</div>
			</div>
		</div>
	);
};

export default Community;
