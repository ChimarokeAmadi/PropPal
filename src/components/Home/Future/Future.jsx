import React from "react";
import Slider from "./Slider/Slider";
const Future = () => {
	return (
		<div className='container px-4 pt-10 flex flex-col justify-center'>
			<div className='space-y-3 flex flex-col justify-center '>
				<p className='text-[20px] font-semibold w-[304px]'>
					Your Future in Real Estate Becomes{" "}
					<span className=' text-accent-300'>Profitable</span>
				</p>

				<p className='text-[13px] '>
					Here Effortless Ownership Meets Financial Freedom. Join Us and Thrive
					Together in the World of Smart Real Estate Investments
				</p>

				<div>
					<img
						src='public/assets/Frame27.png'
						alt=''
						className='w-[136px] h-[40px]'
					/>
				</div>

				<p className='text-[13px] '>
					Thousands of investors enjoy these benefits with PropPal daily. A
					Community Where Your Investment Grows
				</p>

				<div className='flex space-x-3 pb-[17px]'>
					<div className=''>
						<h6 className='text-accent-300 font-semibold text-[25px] space-y-2'>
							2k
						</h6>
						<p>Properties</p>
					</div>
					<div className=''>
						<h6 className='text-accent-300 font-semibold text-[25px] space-y-2'>
							12+
						</h6>
						<p>Acres of Land</p>
					</div>
					<div className=''>
						<h6 className='text-accent-300 font-semibold text-[25px] space-y-2'>
							10k
						</h6>
						<p>Happy Users</p>
					</div>
				</div>

				<Slider />
			</div>
		</div>
	);
};

export default Future;
