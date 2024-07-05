import React from "react";

const OurPartners = () => {
	return (
		<div className='container flex items-center justify-center'>
			<div className='flex flex-col justify-center items-center py-10 px-[17px] space-y-3'>
				<p className='text-[20px] font-semibold text-center'>Our Partners</p>
				<p className='text-[13px] text-center'>
					Proppal is revolutionizing real estate through innovation and
					strategic partnerships with industry leaders, featuring over 50+
					partners.
				</p>
				<div className='flex gap-3'>
					<img
						src='public/assets/Vector1.png'
						alt=''
						className='h-[14px] w-[55px]'
					/>
					<img
						src='public/assets/Group1.png'
						alt=''
						className='h-[17.16px] w-[63.85px]'
					/>
					<img
						src='public/assets/Vector1.png'
						alt=''
						className='h-[14px] w-[55px]'
					/>
					<img
						src='public/assets/Group1.png'
						alt=''
						className='h-[17.16px] w-[63.85px]'
					/>
					<img
						src='public/assets/Vector1.png'
						alt=''
						className='h-[14px] w-[55px]'
					/>
				</div>
			</div>
		</div>
	);
};

export default OurPartners;
