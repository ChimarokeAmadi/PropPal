import React from "react";

const Community = () => {
	return (
		<div className='container px-4'>
			<div className='space-y-5'>
				<div className='space-y-3'>
					<p className='font-semibold text-[20px]'>Join The Propal Community</p>
					<p className='text-[13px]'>
						Real estate investment is not just about transactions; it's about
						building lasting connections and growing together. Our Co-Ownership
						Community is a vibrant space where passionate investors like you
						come together to share knowledge, exchange ideas, and embark on a
						collective journey toward financial empowerment.
					</p>
					<button className='bg-primary-300 text-white rounded-[10px] px-5 py-[10px] text-[13px] font-semibold'>
						Join Our Community
					</button>
				</div>
				<div>
					<img
						src='public/assets/Group26865.png'
						alt=''
						className='w-[343px] h-[329.79px]'
					/>
				</div>
			</div>
		</div>
	);
};

export default Community;
