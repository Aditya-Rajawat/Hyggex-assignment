import Line from "../assets/Line.svg";
import Line2 from "../assets/Line2.svg";

const Menu=()=>{
    return (
        <div className="w-[546px] h-[29px] absolute top-[328px] left-[443px] gap-[40px] flex items-center hover:cursor-pointer">
            <div className="w-[82px] h-[29px]">
                <div className="w-[82px] h-[29px] gap-[14px]">
                    <div className="w-[82px] h-[15px] px-[12px] gap-[10px]">
                        <p className="w-[58px] h-[15px] font-sans text-[20px]  flex items-center justify-center font-bold text-[#06286E] leading-[24.2px]">Study</p>
                    </div>
                    <img className="w-[82px] border-2 absolute bottom-0 border-transparent text-center" src={Line}/>
                </div>
            </div>
            <div className="w-[68px] h-[29px]">
                <div className="w-[68px] h-[29px] absolute left-[122px] gap-[14px]">
                    <div className="w-[68px] h-[15px] px-[12px] gap-[10px]">
                        <p className="w-[44px] h-[15px] flex items-center text-[#696671] justify-center text-[20px] leading-[24.2px] font-medium">Quiz</p>
                    </div>
                    <img className="absolute bottom-0 w-[68px] border-2 border-transparent" src={Line2}/>
                </div>
            </div>
            <div className="w-[66px] h-[29px]">
                <div className="w-[66px] h-[29px] absolute left-[230px] gap-[14px]">
                    <div className="w-[66px] h-[15px] px-[12px] gap-[10px]">
                        <p className="w-[42px] h-[15px] flex items-center text-[#696671] justify-center text-[20px] leading-[24.2px] font-medium">Test</p>
                    </div>
                    <img className="absolute bottom-0 w-[66px] border-2 border-transparent" src={Line2}/>
                </div>
            </div>
            <div className="w-[80px] h-[29px]">
                <div className="w-[80px] h-[29px] absolute left-[336px] gap-[14px]">
                    <div className="w-[80px] h-[15px] px-[12px] gap-[10px]">
                        <p className="w-[56px] h-[15px] flex items-center text-[#696671] justify-center text-[20px] leading-[24.2px] font-medium">Game</p>
                    </div>
                    <img className="absolute bottom-0 w-[66px] border-2 border-transparent" src={Line2}/>
                </div>
            </div>
            <div className="w-[90px] h-[29px]">
                <div className="w-[90px] h-[29px] absolute left-[456px] gap-[14px]">
                    <div className="w-[90px] h-[15px] px-[12px] gap-[10px]">
                        <p className="w-[66px] h-[15px] flex items-center text-[#696671] justify-center text-[20px] leading-[24.2px] font-medium">Others</p>
                    </div>
                    <img className="absolute bottom-0 w-[66px] border-2 border-transparent" src={Line2}/>
                </div>
            </div>
        </div>
    )
};

export default Menu;