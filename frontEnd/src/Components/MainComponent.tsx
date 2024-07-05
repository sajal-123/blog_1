import {ReactNode} from 'react'

import Footer from './Footer'
import Header from './Header'

function MainComponent({ children }: { children: ReactNode }) {
  return (
    <div >
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default MainComponent
