import React from "react";

const Footer = () => {
	return (
		<>
			<footer className='container px-4 pt-10'>
				<div>
					<div className='pb-10'>
						<img
							src='public/assets/Logo 2.png'
							alt=''
							className='h-[15px] w-[68.53px]'
						/>
					</div>
					<div className='flex justify-between pb-9'>
						<div className='w-[160px]'>
							<ul className='space-y-[10px] text-[13px]'>
								<li>About Us</li>
								<li>Partnerships</li>
								<li>Careers</li>
								<li>Terms of Use</li>
								<li>AML Policy</li>
							</ul>
						</div>
						<div className='w-[160px]'>
							<ul className='space-y-[10px] text-[13px]'>
								<li>Download</li>
								<li>Co-ownership</li>
								<li>Community</li>
								<li>Privacy</li>
								<li>Whistleblower</li>
							</ul>
						</div>
					</div>
					<div className='space-y-[10px] pb-[47px]'>
						<p className='text-[13px]'>Hello@PropPal.com</p>
						<p className='text-[13px]'>
							14B, HiTech Estate, Lagos Business School, Eti-Osa, Lekki
						</p>
						<p className='text-[13px]'>+234 8198 876 400</p>

						<ul className=''>
							<li className='flex gap-6 '>
								<a href=''>
									<img src='/assets/whatsapp.png' alt='' className='h-5 w-5' />
								</a>
								<a href=''>
									<img src='/assets/fb.png' alt='' className='h-5 w-5' />
								</a>
								<a href=''>
									<img src='/assets/IG.png' alt='' className='h-5 w-5' />
								</a>
								<a href=''>
									<img src='/assets/linkedIn.png' alt='' className='h-5 w-5' />
								</a>
								<a href=''>
									<img src='/assets/twitter.png' alt='' className='h-5 w-5' />
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='container gap-[121.52px] mb-[100px] hidden'>
					<div className='h-[36px] w-[164.48px]'>
						<img src='/assets/Logo.png' alt='' className='w-full h-full' />
					</div>
					<div className='grid lg:grid-cols-[1.5fr,1fr,1fr,1fr] justify-between w-full'>
						<ul className='flex flex-col gap-5 max-w-[280px]'>
							<li>Hello@PropPal.com</li>
							<li>14B, HiTech Estate, Lagos Business School, Eti-Osa, Lekki</li>
							<li>+234 8198 876 400</li>
							<li className='flex gap-10 '>
								<a href=''>
									<img src='/assets/whatsapp.png' alt='' />
								</a>
								<a href=''>
									<img src='/assets/fb.png' alt='' />
								</a>
								<a href=''>
									<img src='/assets/IG.png' alt='' />
								</a>
								<a href=''>
									<img src='/assets/linkedIn.png' alt='' />
								</a>
								<a href=''>
									<img src='/assets/twitter.png' alt='' />
								</a>
							</li>
						</ul>

						<ul className='flex flex-col gap-5 w-[192px]'>
							<li>Contact Us</li>
							<li>Download</li>
							<li>Co-ownership </li>
							<li>Community</li>
						</ul>

						<ul className='flex flex-col gap-5 w-[167px]'>
							<li>About Us</li>
							<li>Partnerships</li>
							<li>Careers </li>
							<li>FAQ</li>
						</ul>

						<ul className='flex flex-col gap-5 w-[189px]'>
							<li>Privacy</li>
							<li>Terms of Use</li>
							<li>AML Policy </li>
							<li>Whistleblower</li>
						</ul>
					</div>
				</div>
			</footer>
			<div className='bg-primary-300 text-white w-screen text-center text-[13px] py-5'>
				PropPal. All Rights Reserved 2023.
			</div>
		</>
	);
};

export default Footer;
