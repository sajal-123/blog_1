import React from 'react'
import { TiTickOutline } from "react-icons/ti";
{/* dark:bg-gray-800 dark:border-gray-700 */ }
function Article({ image, className }: { image: any, className: string }) {
    return (

        <div className={`max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden duration-300 hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}
        `}>
            <img className="rounded-md p-2 overflow-hidden h-auto w-full md:h-52" src={image} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark-soft md:text-2xl ">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div className='flex justify-between items-end'>
                    <div className='flex gap-2 items-center'>
                    <img src={image} alt="" className=' rounded-full aspect-square h-8' />
                    <div>
                        <h3 className='ml-2'>name is</h3>
                        <p className='italic text-xs text-dark-light flex gap-1'>
                            <span className=' rounded-full bg-green-500 h-3 w-3 items-center flex justify-center'><TiTickOutline /></span>
                            Is Verified</p>
                    </div>
                    </div>
                    <div className="date font-bold text-dark-light text-sm">
                        22-May
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Article
