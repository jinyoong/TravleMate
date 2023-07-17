import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function AnalyticsIng() {

    const [percent, setPercent] = useState(0)
    const navigate  = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
          setPercent((prevProgress) => {
            const newProgress = prevProgress + 1;
            if (newProgress >= 100) {
              clearInterval(timer);
              // 페이지 이동 로직을 여기에 추가
              navigate('/');
            }
            return newProgress;
          });
        }, 50);
    
        return () => clearInterval(timer);
      }, [navigate]);
    
    

    return(
        <>
            <div className="flex justify-center">
              <img src="../TravelMate.png" className="w-[200px] text-center"></img>
            </div>
            <div>
                <div className="font-bold text-[20px] mx-[20px] mt-[110px]">
                    <div>당신과 다른 여행자를</div>
                    <div>연결중입니다.</div>
                </div>

                <div className={`h-[30px] bg-gradient-to-r from-[#844BF5] to-[#6AD3CD] mx-[20px] my-[20px] rounded-[20px] relative`} style={{ width: 40 + 2.5*percent}}>
                    <div className="absolute right-0 pr-[3px] font-bold text-white">
                        {percent}%
                    </div>
                </div>

            </div>
        </>
    )
}

export default AnalyticsIng