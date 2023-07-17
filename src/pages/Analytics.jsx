import React from "react";
import { Link } from "react-router-dom";
import favor from "../components/favor"
import FavorTag from '../components/FavorTag'

function Analytics() {

    const favorList = favor
    
    return(
        <>
            <div className="flex justify-center">
            <img src="TravelMate.png" className="w-[200px] text-center"></img>

            </div>
            <div>
                <div className="font-bold text-[20px] mx-[20px] mt-[10px]">
                    <div>당신의 스타일을</div>
                    <div>선택해주세요</div>
                </div>
                <div className="mx-[20px] flex flex-wrap">
                    {favorList.map((item, index) => (
                        <FavorTag favorItem={item} key={`${item} + ${index}`}/>
                    ))}
                </div>
            </div>

            <Link to="/analytics/ing">
                <div className="w-[320px] mx-[20px] bg-gradient-to-r from-[#844BF5] to-[#6AD3CD] flex justify-center items-center h-[50px] rounded-[4px] mt-[24px] mb-[40px]">
                    <div className="text-white font-bold text-[20px]">확인</div>
                </div>
            </Link>
        </>
    )
}

export default Analytics