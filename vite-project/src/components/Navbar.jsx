import React from 'react'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div>
        <img className='w-[191px] h-[39px] absolute top-8 left-[104px] hover:cursor-pointer' src={Logo} alt="" />
        {/* Links */}
        <div className='w-[525px] h-[48px] absolute top-[27px] left-[812px] gap-10 flex items-center justify-around'>
            {/* HFC links */}
            <div className='w-[282px] h-[22px] '>
                <ul className='flex gap-10 hover:cursor-pointer text-[#3A3740] font-inter'>
                    <li>Home</li>
                    <li>Flashcard</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                </ul>
            </div>
            {/* Login button */}
            <button className='w-[128px] h-[48px] rounded-[32px] bg-gradient-to-l from-[#06286E] to-[#164EC0] text-white'>Login</button>
        </div>
    </div>
  )
}

export default Navbar