import React from "react";

const Navbar = () => {
	return (
		<nav className='container mx-auto py-[15px] px-5 '>
			<div className='flex items-center justify-between'>
				<div className='menu'>
					<img src='public/assets/menu.png' alt='' />
				</div>

				<div className=' w-[67px] h-[15px] flex items-center'>
					<img src='/assets/Logo.png' alt='' className='w-full h-full' />
				</div>

				<ul className='gap-[32px] items-center hidden'>
					<li>
						<a href='' className='text-[#1E1E1E]'>
							Home
						</a>
					</li>
					<li>
						<a href='/learn' className='text-[#1E1E1E]'>
							Learn
						</a>
					</li>
					<li>
						<a href='/partnerships' className='text-[#1E1E1E]'>
							Partnership
						</a>
					</li>
					<li>
						<a href='/about-us' className='text-[#1E1E1E]'>
							Abount Us
						</a>
					</li>
				</ul>

				<button className='bg-[#3133E6] rounded-[10px] py-[10px] px-[20px] hidden'>
					<a href='' className='text-white'>
						Talk to an advisor
					</a>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
