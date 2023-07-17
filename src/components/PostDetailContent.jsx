import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms";

function PostDetailContent({detailData}) {

  const [state, setState] = useRecoilState(modalState);

  return (
    <div className="w-[300px] mt-[35px] ml-[30px] flex flex-col">
      <div className="text-right text-[10px] text-[#9A9A9A]">{detailData.now}</div>
      <div className="font-bold text-[18px]">{detailData.title}</div>
      <div className="mt-[15px] flex gap-[10px]">
        <img
          src={detailData.profile}
          alt="프로필"
          className="w-[40px] h-[40px] rounded-full"
        />
        <div className="flex flex-col font-semibold">
          <div className="flex gap-[10px]">
            <span>{detailData.name}</span>
            <span>{detailData.age}</span>
            <span>{detailData.gender}</span>
          </div>
          <div className="flex gap-[5px]">
            {detailData.ch.map((element, idx) => {
              return <span key={`${element}-${idx}`} className="w-[50px] h-[20px] text-white text-center text-[12px] mt-[2px] bg-[#8449F5] rounded-lg">{element}</span>
            })}
          </div>
        </div>
      </div>
      <hr className="mt-[10px] mb-[10px]" />
      <div className="text-[#000000] font-bold text-[15px] flex gap-[3px]">
          <img 
            src={process.env.PUBLIC_URL + "/Vector.png"}
            alt="장소 아이콘"
            className="w-[11px] h-[13px] mt-[4px]"
          />
          <span>{detailData["target"]}</span>
        </div>
      
      <div className="flex gap-[5px] justify-between">
        <div className="flex gap-[5px]">
          <img 
            src={process.env.PUBLIC_URL + "calendar.png"}
            alt="달력"
            className="h-[10px] mt-[4px]"
          />
          <span className="text-[12px] text-[#9A9A9A]">{detailData.date}</span>
        </div>
        <div className="flex gap-[5px] right-0.5">
          <img 
            src={process.env.PUBLIC_URL + "people.png"}
            alt="인원"
            className="h-[10px] mt-[4px]"
          />
          <span className="text-[#9a9a9a] font-bold text-[12px]">{detailData.cnt}</span>
        </div>
      </div>
      <hr className="mt-[10px] mb-[10px]" />
      <div>{detailData.content}</div>
      <button
        className="drop-shadow-lg w-[300px] h-[35px] text-white text-center text-[15px] mt-[20px] bg-gradient-to-r
from-[#8449f5] to-[#6ad3cd] rounded-lg"
        onClick={() => setState(!state)}
      >
        신청하기
      </button>
      {/* <div className="drop-shadow-lg w-[300px] h-[35px] text-white text-center text-[15px] mt-[20px] bg-gradient-to-r
from-[#8449f5] to-[#6ad3cd] rounded-lg">
        <button onClick={() => setState(!state)} className="mt-[6px]">신청하기</button>
      </div> */}
    </div>
  )
}

export default PostDetailContent;