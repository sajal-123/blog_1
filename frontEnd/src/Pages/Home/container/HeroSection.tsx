import Image from "./Image";
import React, { useState, useContext } from 'react';
import NavContext from '../../../context/NavContext'



function HeroSection() {
    const { isNavbarVisible } = useContext(NavContext)
    return (
        <div className='md:flex flex-row-reverse items-center justify-center gap-4 md:h-[80vh] px-2 bg-hero-gradient w-full' >
            <Image />
            <div className='left flex flex-col items-center gap-6 text-start w-full md:w-[50%]'>
                <h1 className='lg:text-5xl xl:text-6xl  md:text-5xl text-3xl font-bold font-Roboto mb-6'>TECH CHRONICLES:</h1>
                <h2 className='lg:text-4xl xl:text-4xl md:text-3xl text-xl font-bold font-Roboto pl-6'>
                    Exploring Cutting-Edge Tech: Insights, Trends, and Innovations for Today's Digital World
                </h2>
                <p className='lg:text-base xl:text-xl text-gray-700 md:text-lg text-base font-Roboto pl-6 text-center'>
                    Welcome to Tech Chronicles, where tech meets tomorrow. Dive into breakthroughs, insights, and trends shaping the future of the tech era. Join us on a journey of discovery and innovation that defines the tech landscape.
                </p>
                <div className={` ${isNavbarVisible ? 'hidden' : ''} px-2 flex items-center justify-center gap-4 rounded-md bg-gray-100`}>
                    <input
                        type="text"
                        placeholder="Enter text"
                        className='z-0 w-full max-w-screen-lg p-2 border border-gray-300 rounded-lg
                         shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          transition-all duration-300 ease-in-out transform focus:scale-105'
                    />
                    <button type="button" className="mt-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Search</button>

                </div>
            </div>

        </div>
    );
}

export default HeroSection;
