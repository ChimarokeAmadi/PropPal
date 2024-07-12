import React from "react";

const ArticlePage = () => {
	return (
		<div className=' bg-[url(public/assets/Learn/LearnHero.png)]'>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticlePage;
