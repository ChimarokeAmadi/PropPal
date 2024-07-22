import React from "react";
import Cultures from "../Cultures/Cultures";

const OurCulture = () => {
	return (
		<div className='container px-[18.5px] py-10 lg:bg-[#F2EFEF] lg:pb-[228px] lg:pt[100px]'>
			<div className='space-y-5 lg:hidden'>
				<p className='text-[20px] font-semibold text-center'>Our Culture</p>
				{Cultures.map((data, index) => (
					<div
						className={`rounded-[10px] border-primary-300 border-2 py-5 pl-5 pr-[19px] ${
							index == 0 || index == 5 ? "bg-primary-300 text-white" : ""
						}`}>
						<div className='space-y-[15px]'>
							<div className=''>
								<img src={data.icon} alt='' className='w-[60px] h-[42.81px]' />
							</div>
							<div className='space-y-[15px] pb-[17.24px]'>
								<p className='font-semibold text-[18px]'>{data.title}</p>
								<p className='text-[13px]'>
									{data.text}
									<br />
									<br />
									{data.text2}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='space-y-[50px]'>
				<p className='text-[36px] font-medium text-center'>Our Culture</p>
				<div className='hidden lg:grid grid-cols-3 grid-rows-15 gap-5 h-[1258px] w-[1240px] mx-auto'>
					<div className='px-20 py-[100px] bg-white rounded-[20px] row-start-2 col-start-1 col-end-2 row-end-7'>
						<div className='space-y-10 '>
							<img
								src='/assets/AboutUS/Lamp2.png'
								alt=''
								className='h-[132px] w-[185px] mx-auto'
							/>
							<p className='text-[24px] font-medium text-center'>Innovation</p>
						</div>
					</div>
					<div className='px-20 py-[100px] bg-white rounded-[20px] row-start-1 row-end-6 col-start-2 col-end-3'>
						<div className='space-y-10'>
							<img
								src='/assets/AboutUS/brainstorming3.png'
								alt=''
								className='h-[132px] w-[185px] mx-auto'
							/>
							<p className='text-[24px] font-medium text-center'>Innovation</p>
						</div>
					</div>
					<div className='px-20 py-[100px] bg-white rounded-[20px] row-start-2 row-end-7 col-start-3 col-end-4'>
						<div className='space-y-10'>
							<img
								src='/assets/AboutUS/search.png'
								alt=''
								className='h-[132px] w-[185px] mx-auto'
							/>
							<p className='text-[24px] font-medium text-center'>Innovation</p>
						</div>
					</div>
					<div className='px-20 py-[100px] bg-white rounded-[20px] row-start-7 row-end-12 col-start-1 col-end-2'>
						<div className='space-y-10'>
							<img
								src='/assets/AboutUS/people1.png'
								alt=''
								className='h-[132px] w-[185px] mx-auto'
							/>
							<p className='text-[24px] font-medium text-center'>Innovation</p>
						</div>
					</div>
					<div className='px-20 py-[100px] bg-white rounded-[20px] row-start-6 row-end-11 col-start-2 col-end-3'>
						<div className='space-y-10'>
							<img
								src='/assets/AboutUS/Lamp2.png'
								alt=''
								className='h-[132px] w-[185px] mx-auto'
							/>
							<p className='text-[24px] font-medium text-center'>Innovation</p>
						</div>
					</div>
					<div className='px-20 py-[100px] bg-white rounded-[20px] row-start-7 row-end-12 col-start-3 col-end-4 '>
						<div className='space-y-10'>
							<img
								src='/assets/AboutUS/Lamp2.png'
								alt=''
								className='h-[132px] w-[185px] mx-auto'
							/>
							<p className='text-[24px] font-medium text-center'>Innovation</p>
						</div>
					</div>
					<div className='px-20 py-[100px] bg-white rounded-[20px] col-start-2 col-end-3 row-start-11 row-span-full'>
						<div className='space-y-10'>
							<img
								src='/assets/AboutUS/Lamp2.png'
								alt=''
								className='h-[132px] w-[185px] mx-auto'
							/>
							<p className='text-[24px] font-medium text-center'>Innovation</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurCulture;
