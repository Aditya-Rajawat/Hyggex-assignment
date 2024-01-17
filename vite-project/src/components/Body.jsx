import React from "react";
import home from "../assets/home.svg";
import arrow from "../assets/arrow.svg";
import Menu from "./Menu";
import Container from "./Container";
import plus from '../assets/plus.svg'
import hyggex_logo from "../assets/hyggex_logo.svg"
import clip from "../assets/Clip path group.svg" 

const Body = () => {
  return (
    <>
      <div className="w-[487px] h-[30px] absolute top-[139px] left-[102px] flex hover:cursor-pointer">
        {/* 1st section */}
        <div className="w-[139px] h-[30px] flex items-center">
          <img className="w-[30px] h-[30px]" src={home} alt="" />
          <img className="w-6 h-6" src={arrow} alt="" />
          <div className="w-[85px] h-[22px] flex items-center">
            <span className="font-medium text-[#696671] text-lg">
              Flashcard
            </span>
          </div>

          {/* 2nd section */}
          <div className="w-[348px] h-[24px] flex items-center">
            <img className="w-6 h-6" src={arrow} alt="" />
            <div className="w-[112px] h-[22px] flex items-center">
              <span className="font-medium text-lg text-[#696671]">
                Mathematics
              </span>
            </div>

            <div className="w-[220px] h-[24px] flex items-center">
              <img className="w-6 h-6" src={arrow} alt="" />
              <div className="w-[188px] h-[22px] flex items-center">
                <span className="font-semibold text-lg text-[#06286E]">
                  Relation and Function
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Menu />
      <Container />

      <div className="w-[217px] h-[80.6px] flex items-center absolute top-[955px] left-[106px] gap-[21.26px]">
        <div className="w-[80.6px] flex items-center justify-center h-[80.6px] backdrop-blur-sm shadow-2xl shadow-[#08389966] rounded-full">
          <img src={clip} />
        </div>
        <div className="w-[115.14px] h-[60.17px] gap-[10.63px]">
          <p className="w-[79px] h-[15px] font-sans font-bold text-[12.4px] leading-[15.01px] text-[#696671]">
            Published by
          </p>
          <div className="w-[115.14px] h-[34.54px]">
            <img src={hyggex_logo} />
          </div>
        </div>
      </div>
      <div className="absolute w-[299px] h-[60px] top-[965px] left-[1039px] gap-[8px] flex items-center">
        <div className="w-[60px] h-[60px]">
          <img className="absolute top-[5px] left-[5px] hover:cursor-pointer" src={plus} />
        </div>
        <p className="w-[231px] h-[34px] font-sans font-semibold text-[28px] leading-[33.89px] bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text">
          Create Flashcard
        </p>
      </div>
    </>
  );
};

export default Body;
