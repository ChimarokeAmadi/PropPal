import React from "react";
import Slider from "./Slider/Slider";
const Future = () => {
	return (
		<div className='container px-4 pt-10 flex flex-col justify-center lg:py-[100px] lg:px-[100px] '>
			<div className='flex justify-between'>
				<div className='space-y-3 flex flex-col justify-center lg:w-[436px]'>
					<p className='text-[20px] font-semibold w-[304px] lg:font-medium lg:text-[36px] lg:w-full'>
						Your Future in Real Estate Becomes{" "}
						<span className=' text-accent-300'>Profitable</span>
					</p>

					<p className='text-[13px] lg:text-[16px] lg:w-[396px]'>
						Here Effortless Ownership Meets Financial Freedom. Join Us and
						Thrive Together in the World of Smart Real Estate Investments
					</p>

					<div>
						<img
							src='/assets/Frame27.png'
							alt=''
							className='w-[136px] h-[40px] lg:w-[176px] lg:h-[50px]'
						/>
					</div>

					<p className='text-[13px] lg:text-[16px] lg:w-[350px]'>
						Thousands of investors enjoy these benefits with PropPal daily. A
						Community Where Your Investment Grows
					</p>

					<div className='flex space-x-3 pb-[17px]'>
						<div className=''>
							<h6 className='text-accent-300 font-semibold text-[25px] space-y-2 lg:text-[40px]'>
								2k
							</h6>
							<p>Properties</p>
						</div>
						<div className=''>
							<h6 className='text-accent-300 font-semibold text-[25px] space-y-2 lg:text-[40px]'>
								12+
							</h6>
							<p>Acres of Land</p>
						</div>
						<div className=''>
							<h6 className='text-accent-300 font-semibold text-[25px] space-y-2 lg:text-[40px]'>
								10k
							</h6>
							<p>Happy Users</p>
						</div>
					</div>
					<Slider />
				</div>

				<div className='hidden lg:grid grid-cols-2 w-[736px] gap-5'>
					<div className='px-5 py-5 border-primary-300 border-2 rounded-[20px]'>
						<img
							src='/assets/Untitled21.png'
							alt=''
							className='h-[60px] w-[60px]'
						/>
						<div className='flex flex-col space-y-4'>
							<p className='font-semibold text-[20px]'>
								Effortless Property Ownership
							</p>
							<p className='text-[16px]'>
								We simplify property ownership, enabling you to navigate the
								complexities effortlessly. With intuitive tools and expert
								guidance, investing in real estate becomes seamless.
							</p>
						</div>
					</div>
					<div className='px-5 py-5 border-primary-300 border-2 rounded-[20px]'>
						<img
							src='/assets/Untitled21.png'
							alt=''
							className='h-[60px] w-[60px]'
						/>
						<div className='flex flex-col space-y-4'>
							<p className='font-semibold text-[20px]'>
								Flexible Investment Strategies
							</p>
							<p className='text-[16px]'>
								Whether outright buying, co-owning, or exploring profitable
								resale, investors enjoy unparalleled flexibility and control.
							</p>
						</div>
					</div>
					<div className='px-5 py-5 border-primary-300 border-2 rounded-[20px]'>
						<img
							src='/assets/Untitled21.png'
							alt=''
							className='h-[60px] w-[60px]'
						/>
						<div className='flex flex-col space-y-4'>
							<p className='font-semibold text-[20px]'>
								Empowering Financial Tools
							</p>
							<p className='text-[16px]'>
								From smart calculators predicting growth rates to a dedicated
								wallet feature, making informed financial decisions is at the
								your fingertips.
							</p>
						</div>
					</div>
					<div className='px-5 py-5 border-primary-300 border-2 rounded-[20px]'>
						<img
							src='/assets/Untitled21.png'
							alt=''
							className='h-[60px] w-[60px]'
						/>
						<div className='flex flex-col space-y-4'>
							<p className='font-semibold text-[20px]'>
								Community & Expert Support
							</p>
							<p className='text-[16px]'>
								Through forums, webinars, and expert advice, investors connect,
								learn, and grow together. PropPal ensures no one navigates their
								real estate journey alone.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Future;
