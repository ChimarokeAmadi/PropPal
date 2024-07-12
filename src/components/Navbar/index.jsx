import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const openMenu = () => {
		setIsActive(true);
	};

	const closeMenu = () => {
		setIsActive(false);
	};

	// const NavLinkStyles = ({ isActive }) => {
	// 	return {
	// 		color: isActive ? "blue" : "#1E1E1E",
	// 	};
	// };

	return (
		<nav className='container mx-auto py-[15px] px-5 lg:px-[100px] lg:pt-10 lg:pb-9'>
			<div
				className={`fixed top-0 left-0 right-[30%] bg-white h-screen z-50 pl-[10px] transition-transform  duration-700 ${
					isActive ? "translate-x-0" : "translate-x-[-100%]"
				}`}>
				<img
					src='public/assets/Vector.png'
					alt=''
					className='absolute top-[17px] left-[22px] h-5 w-5'
					onClick={closeMenu}
				/>

				<ul className='text-[13px] text-[#1E1E1E] pt-[109px] pb-[23px]'>
					<li className='h-[50px]'>
						<NavLink
							onClick={closeMenu}
							className={({ isActive }) => {
								return isActive ? "text-primary-300" : "#1E1E1E";
							}}
							to=''>
							Home
						</NavLink>
					</li>
					<li className='h-[50px]'>
						<NavLink
							onClick={closeMenu}
							className={({ isActive }) => {
								return isActive ? "text-primary-300" : "#1E1E1E";
							}}
							to='/learn'>
							Learn
						</NavLink>
					</li>
					<li className='h-[50px]'>
						<NavLink
							onClick={closeMenu}
							className={({ isActive }) => {
								return isActive ? "text-primary-300" : "#1E1E1E";
							}}
							to='/partnerships'>
							Partnership
						</NavLink>
					</li>
					<NavLink
						onClick={closeMenu}
						className={({ isActive }) => {
							return isActive ? "text-primary-300" : "#1E1E1E";
						}}
						to='/about-us'>
						About Us
					</NavLink>
				</ul>

				<button className='bg-primary-300 px-[28.5px] py-[10px] rounded-[10px] text-white text-[13px]'>
					Talk to an advisor
				</button>
			</div>
			<div className='flex items-center justify-between lg:h-[43px]'>
				<div className='menu lg:hidden' onClick={openMenu}>
					<img src='public/assets/menu.png' alt='' />
				</div>

				<div className=' w-[67px] h-[15px] flex items-center lg:h-6 lg:w-[109.65px]'>
					<img src='/assets/Logo.png' alt='' className='w-full h-full' />
				</div>

				<ul className='gap-[32px] items-center hidden lg:flex'>
					<li>
						<NavLink
							className={({ isActive }) => {
								return isActive ? "text-primary-300" : "#1E1E1E";
							}}
							to=''>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => {
								return isActive ? "text-primary-300" : "#1E1E1E";
							}}
							to='/learn'>
							Learn
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => {
								return isActive ? "text-primary-300" : "#1E1E1E";
							}}
							to='/partnerships'>
							Partnership
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => {
								return isActive ? "text-primary-300" : "#1E1E1E";
							}}
							to='/about-us'>
							About Us
						</NavLink>
					</li>
				</ul>

				<button className='bg-[#3133E6] rounded-[10px] py-[10px] px-[20px] hidden lg:inline'>
					<a href='' className='text-white lg:text-[18px]'>
						Talk to an advisor
					</a>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
