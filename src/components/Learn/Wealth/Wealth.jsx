import React from "react";
import Features from "../features/features";
import { Link } from "react-router-dom";

const Wealth = () => {
	return (
		<div className='container  px-[19.5px] lg:items-center lg:px-[100px]'>
			<div className='gap-5 mt-10 flex flex-col lg:mt-[100px] lg:mb-[100px]'>
				<div className='flex gap-[10px] self-start'>
					<img
						src='public/assets/Learn/Profit.png'
						alt=''
						className='w-6 h-7 lg:w-[68.57px] lg:h-[80px]'
					/>
					<div className='space-y-[5px] lg:space-y-[10px]'>
						<p className='text-[20px] font-semibold lg:text-[36px]'>
							Wealth Building Insights{" "}
						</p>
						<p className='text-[13px] lg:text-[20px]'>
							Learn how to empower your financial future
						</p>
					</div>
				</div>

				<div className='grid gap-10 grid-cols-1 lg:grid-cols-[400px,400px,400px] lg:gap-5'>
					{Features.map((data, index) => (
						<Link to='' className='lg:p-5'>
							<div
								className='rounded-[10px] shadow-lg lg:shadow-none'
								key={index}>
								<img
									src={data.image}
									alt=''
									className='w-full lg:rounded-[15px]'
								/>
								<div className='px-[17.95px] pt-[12px] pb-[19px] space-y-[10px] lg:space-y-3 lg:px-0 lg:pt-5'>
									<p className='text-[13px] font-medium lg:text-[20px]'>
										{data.title}
									</p>
									<p className='text-[13px] lg:text-[16px]'>{data.desc}</p>
									<p className='text-[10px] opacity-65 lg:text-[14px]'>
										October 20, 2023
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Wealth;
