
import React from 'react';

const EmailSection = () => {
    return (
        <div className='  bg-cover text-white bg-no-repeat' style={{ backgroundImage: `url(https://quizapi.io/storage/Newsletter.jpeg)` }}>
            <div className='bg-black bg-opacity-60  py-20 text-center  ' >
                <p className='text-3xl py-8 '>Stay Tuned</p>
                <p className='py-10  font-thin'>Subscribe to our newsletter and receive the latest news from QuzApi.</p>
                <form className="mt-6 ">
                    <div className="relative w-full mx-auto max-w-lg">
                        <label className="sr-only" htmlFor="email"> Email </label>

                        <input
                            className="w-full  rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                            id="email"
                            type="email"
                            placeholder="john@doe.com"
                        />

                        <button
                            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default EmailSection;