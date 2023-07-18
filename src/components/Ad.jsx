import React from "react";

function Ad() {
  return (
    <div className="border-solid border-[1.5px] border-gray-200 bg-[#D0ECE8] rounded-[15px] drop-shadow-md flex mt-[10px] p-[5px] h-[60px]">
      <img 
        src="https://www.hanafn.com:8002/assets/img/ko/esg/img-allhanaday05.png" 
        alt="광고"
        className="w-[80px] rounded-full"
      />
      <div className="font-bold text-[12px] mt-2 ml-2">
        <div className="text-[8px]">사랑 나눔 온택트 캠패인</div>
        <div>생활 속 지구 지킴을 위한 줍깅 챌린지 하기</div>
      </div>
    </div>
  )
}

export default Ad;