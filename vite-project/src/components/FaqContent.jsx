import React from 'react'
import downarrow from '../assets/downarrow.svg'

const FaqContent = () => {
  return (
    <div>
         {/* 1st section */}
         <div className="w-[848px] h-[58px] rounded-xl p-[1px] bg-gradient-to-r from-[#217EEC] to-[#082299] my-5">
          <div className="w-full h-full rounded-xl bg-[#F9F9F9] flex items-center justify-between px-7">
            <span className="font-semibold text-base text-[#28262C] font-inter leading-[26px] ">
              Can education flashcards be used for all age groups?
            </span>
            <img
              className="w-6 h-6 hover:cursor-pointer"
              src={downarrow}
              alt=""
            />
          </div>
        </div>
    </div>
  )
}

export default FaqContent