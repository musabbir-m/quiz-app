import { Button } from 'antd';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='bg-cover bg-no-repeat' style={{ backgroundImage: `url(https://quizapi.io/storage/settings/April2020/OhP8UZAm0VSrpRECv552.jpg)` }}>

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto w-[400px] ">
                    <form
                        action=""
                        className=" mt-6  rounded-lg p-4 bg-white shadow-lg sm:p-6 lg:p-8"
                    >
                        <p className=" mb-5 text-lg font-medium">Sign in to your account</p>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-full border-gray-400 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-full border-gray-400 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />
                            </div>
                            <p className='pl-4 pt-5 text-gray-600 pe-12 text-sm '>Forgot Password?</p>
                        </div>

                        <Button
                            className=' text-md h-10 my-8 border border-green-500 w-full text-green-500' type="primary" shape="round">
                            LOGIN
                        </Button>

                        <p className="text-center text-sm mb-8 text-gray-500">
                            Or LogIn With
                        </p>
                        <div className=' mb-10 text-center'>
                            <div className='flex justify-center '>
                                <FaFacebook className='mx-4 text-3xl text-blue-400 rounded-full'></FaFacebook>
                                <FaGoogle className='mx-4 text-3xl text-red-500 rounded-full'></FaGoogle>
                                <FaTwitter className='mx-4 text-3xl text-white bg-sky-500 p-1 rounded-full'></FaTwitter>
                                <FaGithub className='mx-4 text-3xl text-black bg-white-400 rounded-full'></FaGithub>
                            </div>
                        </div>
                        <p className="text-center text-sm text-gray-500">
                            No account?
                            <a className="underline" href="">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Login;