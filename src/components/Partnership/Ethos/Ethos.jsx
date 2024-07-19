import React from "react";
import benefits from "../Benefit/benefits";

const Ethos = () => {
	return (
		<div className='space-y-10 mb-10'>
			{benefits.map((data, index) => (
				<div
					key={index}
					className={`container px-[19px] space-y-[15px] lg:flex lg:gap-20 lg:p-[100px] lg:space-y-0 ${
						index % 2 == 0 ? "flex-row" : "flex-row-reverse"
					}`}>
					<div className='w-[336px] space-y-[15.13px] lg:w-full lg:space-y-5'>
						<p className='text-[20px] font-semibold lg:text-[36px] lf:font-medium'>
							{data.title}
						</p>
						<p className='text-[13px] lg:text-[20px]'>{data.text}</p>
						<ul className='space-y-[12.1px]'>
							<li className='text-[13px] relative pl-[21.18px] lg:text-[20px]'>
								{data.benefit1}
								<img
									src='/assets/Partnership/listBefore.png'
									alt=''
									className='absolute top-[4px] left-0 lg:size-4 lg:top-[7px]'
								/>
							</li>
							<li className='text-[13px] relative pl-[21.18px] lg:text-[20px]'>
								{data.benefit2}
								<img
									src='/assets/Partnership/listBefore.png'
									alt=''
									className='absolute top-[4px] left-0 lg:size-4 lg:top-[7px] '
								/>
							</li>
						</ul>
					</div>
					<img
						src={data.image}
						alt=''
						className='rounded-[4px] lg:w-[542px] lg:h-[496px]'
					/>
				</div>
			))}
		</div>
	);
};

export default Ethos;
