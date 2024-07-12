import React from "react";
import Buy from "@/components/Learn/Buy/Buy";
import Wealth from "@/components/Learn/Wealth/Wealth";
import ReadyToInvest from "@/components/Learn/ReadyToInvest/ReadyToInvestLearn";

const LearnPage = () => {
	return (
		<>
			<div className=' bg-[url(/assets/Learn/LearnHero.png)]'>
				<div className='bg-[#1E1F8C99] bg-opacity-65 text-white'>
					<div className='container px-5 pt-[136px] pb-[135px] lg:pt-[114px] lg:pb-[234px] lg:px-[243.5px]'>
						<div className='w-[334px] space-y-[15px] mx-auto lg:w-fit lg:space-y-6'>
							<p className='text-[31px] text-center lg:text-[76px]'>
								Learn with PropPal
							</p>
							<p className='text-[13px] text-center lg:text-[24px]'>
								Supporting your Property Investment journey through actionable
								tips, best practices and insights.
							</p>
							<div className='flex gap-[10px] justify-center lg:gap-5'>
								<button className='border-[1px] border-white  text-[13px] rounded-[6px] py-[10px] w-[161px] lg:font-medium lg:text-[18px] lg:w-fit lg:px-5 lg:py-[10px]'>
									Buy a Property
								</button>
								<button className='border-[1px] border-white  text-[13px] rounded-[6px] py-[10px] w-[161px] lg:font-medium lg:text-[18px] lg:w-fit lg:px-5 lg:py-[10px]'>
									Wealth Building Insights
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Buy />
			<Wealth />
			<ReadyToInvest />
		</>
	);
};

export default LearnPage;
