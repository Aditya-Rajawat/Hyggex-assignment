import React from "react";
import downarrow from "../assets/downarrow.svg";
import FaqContent from "./FaqContent";

const Faq = () => {
  return (
    <div>
      <span className="w-[97px] absolute top-[1190px] left-[104px] font-bold text-5xl leading-[58.09px] text-transparent bg-clip-text bg-gradient-to-b from-[#06286E] to-[#164EC0]">
        FAQ
      </span>

      {/* FAQ section */}
      <div className="w-[848px] h-[238px] absolute top-[1273px] left-[104px] gap-[32px]">
        {/* 1st section */}
        <div className="w-[848px] h-[58px] rounded-xl p-[1px] bg-gradient-to-r from-[#217EEC] to-[#082299] my-7">
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

        {/* 2nd section */}
        <div className="w-[848px] h-[58px] rounded-xl p-[1px] bg-gradient-to-r from-[#217EEC] to-[#082299] my-7">
          <div className="w-full h-full rounded-xl bg-[#F9F9F9] flex items-center justify-between px-7">
            <span className="font-semibold text-base text-[#28262C] font-inter leading-[26px] ">
              How do education flashcards work?
            </span>
            <img
              className="w-6 h-6 hover:cursor-pointer"
              src={downarrow}
              alt=""
            />
          </div>
        </div>

        {/* 3rd section */}
        <div className="w-[848px] h-[58px] rounded-xl p-[1px] bg-gradient-to-r from-[#217EEC] to-[#082299] my-7">
          <div className="w-full h-full rounded-xl bg-[#F9F9F9] flex items-center justify-between px-7">
            <span className="font-semibold text-base text-[#28262C] font-inter leading-[26px] ">
              Can education flashcards be used for test preparation?
            </span>
            <img
              className="w-6 h-6 hover:cursor-pointer"
              src={downarrow}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
