import React from "react";
import Ethos from "@/components/Partnership/Ethos/Ethos";

const PartnershipsPage = () => {
	return (
		<>
			<div className='bg-[url(/assets/Partnership/PartnershipHero.png)] '>
				<div className='bg-[#1E1F8C] bg-opacity-[28%]'>
					<div className='container text-white pt-[94.38px] pb-[141.05px] px-5'>
						<div className=' w-[336px] h-[176.57px]'>
							<p className='font-semibold text-[31px]'>
								We are empowering Growth Through Strategic Alliances
							</p>
							<p className='text-[13px]'>
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
		</>
	);
};

export default PartnershipsPage;
