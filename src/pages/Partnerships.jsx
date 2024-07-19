import React from "react";
import Ethos from "@/components/Partnership/Ethos/Ethos";
import Partners from "@/components/Partnership/Partners/Partners";
import Future2 from "@/components/Partnership/Future/Future";
const PartnershipsPage = () => {
	return (
		<>
			<div className='bg-[url(/assets/Partnership/handshake.png)]  bg-center'>
				<div className='bg-[#1E1F8C] bg-opacity-[28%]'>
					<div className='container text-white pt-[94.38px] pb-[141.05px] px-5 lg:flex lg:flex-col items-center lg:py-[299px] lg;px-[342px]'>
						<div className=' w-[336px] h-[176.57px] lg:w-full lg:h-full lg:flex flex-col items-center lg:gap-[10px]'>
							<p className='font-semibold text-[31px] lg:w-[756px] lg:text-center lg:text-[40px]'>
								We are empowering Growth Through Strategic Alliances
							</p>
							<p className='text-[13px] lg:text-[20px]'>
								We are utilizing the power of Collaborative Partnerships in Real
								Estate
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='pt-10'>
				<Ethos />
			</div>
			<div className=''>
				<Partners />
			</div>
			<div className=''>
				<Future2 />
			</div>
		</>
	);
};

export default PartnershipsPage;
