import React from 'react'
import Article from '../../../Components/Article'
import { Laptop } from '../../../constants/index.ts'
function Articles() {
    return (
        <div className=' w-full flex flex-col px-5 py-10  bg-article-gradient'>
            <div className='flex flex-wrap gap-2'>
            <Article image={Laptop} className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] xl:w-[calc(25%-10px)]' />
            <Article image={Laptop} className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] xl:w-[calc(25%-10px)]' />
            <Article image={Laptop} className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] xl:w-[calc(25%-10px)]' />
            <Article image={Laptop} className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] xl:w-[calc(25%-10px)]' />
            <Article image={Laptop} className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] xl:w-[calc(25%-10px)]' />
            <Article image={Laptop} className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] xl:w-[calc(25%-10px)]' />
            <Article image={Laptop} className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] xl:w-[calc(25%-10px)]' />
            <Article image={Laptop} className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] xl:w-[calc(25%-10px)]' />
            <Article image={Laptop} className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] xl:w-[calc(25%-10px)]' />
            <Article image={Laptop} className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] xl:w-[calc(25%-10px)]' />
            <Article image={Laptop} className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] xl:w-[calc(25%-10px)]' />
            <Article image={Laptop} className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] xl:w-[calc(25%-10px)]' />
            </div>
        </div>
    )
}

export default Articles
