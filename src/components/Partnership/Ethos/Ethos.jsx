import React from "react";
import benefits from "../Benefit/benefits";

const Ethos = () => {
	return (
		<div className='space-y-10'>
			{benefits.map((data, index) => (
				<div key={index} className='container px-[19px] space-y-[15px]'>
					<div className='w-[336px] space-y-[15.13px]'>
						<p className='text-[20px] font-semibold'>{data.title}</p>
						<p className='text-[13px]'>{data.text}</p>
						<ul className='space-y-[12.1px]'>
							<li className='text-[13px] relative pl-[21.18px]'>
								{data.benefit1}
								<img
									src='/assets/Partnership/listBefore.png'
									alt=''
									className='absolute top-[4px] left-0 '
								/>
							</li>
							<li className='text-[13px] relative pl-[21.18px]'>
								{data.benefit2}
								<img
									src='/assets/Partnership/listBefore.png'
									alt=''
									className='absolute top-[4px] left-0 '
								/>
							</li>
						</ul>
					</div>
					<img src={data.image} alt='' className='rounded-[4px]' />
				</div>
			))}
		</div>
	);
};

export default Ethos;
