import React from "react";
import Cultures from "../Cultures/Cultures";

const OurCulture = () => {
	return (
		<div className='container px-[18.5px] py-10'>
			<div className='space-y-5'>
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
		</div>
	);
};

export default OurCulture;
