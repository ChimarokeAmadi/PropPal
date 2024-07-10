import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className='w-screen h-screen flex flex-col justify-center items-center bg-white text-primary-300'>
			<p className='text-center text-[40px]'>You seem to be lost!</p>
			<Link to='/' className='text-[20px]'>
				Go home
			</Link>
		</div>
	);
};

export default ErrorPage;
