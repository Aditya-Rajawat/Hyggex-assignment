import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Faq from './components/Faq'

const App = () => {
  return (
    <div className='w-[1440px] h-[1818px] bg-[#F9F9F9]'>
      <Navbar />
      <Body />
      <Faq />
    </div>
  )
}

export default App