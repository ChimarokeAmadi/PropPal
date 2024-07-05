import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className='container flex gap-[121.52px] mb-[100px] '>
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
	);
};

export default Footer;
