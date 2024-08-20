import React from 'react';
import {Laptop} from '../../../constants/index.ts'
function CTA() {
    return (
        <div >
            <div className="h-40 overflow-hidden">
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                >
                    <path
                        d="M-4.28,-2.46 C128.33,263.27 352.93,-215.05 500.78,140.24 L488.93,190.44 L-0.00,149.60 Z"
                        className="stroke-none fill-blue-500"
                    ></path>
                </svg>
            </div>
            <div className="bg-blue-500 text-white text-center py-10 grid grid-cols-1 items-center gap-4 md:grid-cols-2 w-full px-4">
                <div className='flex flex-col gap-2'>
                    <h2 className="md:text-4xl text-3xl font-bold mb-4">Get fresh stories first, straight to your inbox weekly..</h2>
                    <div className='flex gap-4 items-center m-2 mb-4'>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className='z-0 w-full h-12 max-w-screen-lg p-2 border border-gray-300 rounded-lg
                         shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          transition-all duration-300 ease-in-out transform focus:scale-105'
                        />
                        <button type="button" className="mt-2 font-bold text-white text-nowrap bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Get Started</button>
                    </div>
                    <p className=' text-dark-soft font-bold'>
                        Delve into the latest technology trends and discoveries. Curious to learn more? Ask us how you can join our community!
                    </p>
                </div>
                <div className=' items-center justify-center flex'>
                    <div className='max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden duration-300 hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]
        '>
                        <img className="rounded-md p-2 overflow-hidden h-auto w-full md:h-52" src={Laptop} alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark-soft md:text-2xl ">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTA;
