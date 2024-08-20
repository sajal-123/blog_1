import React, { useContext } from 'react';
import NavContext from '../../../context/NavContext'
import { HeroRightImage } from '../../../constants/index.ts'

function Image() {

  return (
    <>
      <div className='md:w-[45%] w-full'>
        <img src={HeroRightImage} alt="Hero"  className='w-full h-[100%]'/>
      </div>
    </>
  )
}

export default Image
