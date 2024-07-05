import React from 'react'
import MainComponent from '../../Components/MainComponent'
import HeroSection from './container/HeroSection'
import Articles from './container/Articles'
import CTA from './container/CTA'


export function HomeScreen() {
  return (
    <div className='Hero'>
      <MainComponent>
        <HeroSection/>
        <Articles/>
        <CTA/>
      </MainComponent>
    </div>
  )
}

