import React from "react";
import background from "../assets/shedmathbg.jpg";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${background})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				height: "100vh",
			}}>
			<div className=' flex max-w-[800px] place-items-center mx-auto  h-[96%]'>
				<form className='bg-[#463d3dcc] rounded w-[100%] h-[auto] flex flex-col mx-3  py-10 px-5 md:px-10 lg:px-20'>
					<h1 className='text-center text-[2rem]  text-white pb-5'>
						Welcome back !
					</h1>
					<button className='mb-8 bg-[#C4C4C4] text-[16px] rounded-[10px] py-1 max-w-[80%] md:w-[50%] lg:w-[40%] mx-auto hover:bg-[#eae7e7] flex justify-center items-center gap-3 px-3 md:px-0'>
						<FcGoogle className='w-5 h-7' /> Continue with Google
					</button>
					<input
						className='bg-[#C4C4C4] mb-5 placeholder:text-black px-5 py-2 w-[100%] md:w-[80%] lg:w-[70%] mx-auto'
						type='text'
						placeholder='Username'
					/>
					<input
						className='bg-[#C4C4C4] mb-1 placeholder:text-black px-5 py-2 w-[100%] md:w-[80%] lg:w-[70%] mx-auto'
						type='text'
						placeholder='Password'
					/>
					<p className='text-[#ffffffb3] mx-auto w-[100%]  text-[14px] mb-5 hover:underline cursor-pointer md:w-[80%] lg:w-[70%]'>
						Forgot password ?
					</p>
					<input
						type='submit'
						value='LOG IN '
						className='text-[#ffffffb3] bg-[#2E2828] p-2 w-[40%] mx-auto rounded-[10px] hover:bg-[#3d3535] cursor-pointer'
					/>
				</form>
			</div>
			;
		</div>
	);
};
