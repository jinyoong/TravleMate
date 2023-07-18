import React from "react";
import { postDatas } from "./datas";
import PostItem from "./PostItem";
import Ad from "./Ad";

function PostItems() {

  return (
    <div className="w-[340px] h-[542px] mx-[10px] mt-[10px]">
      <div className="w-[340px] rounded-lg border-solid border-[1.5px] h-[30px] mb-[10px] flex">
        <img 
          src={process.env.PUBLIC_URL + "/search.png"} 
          alt="검색 아이콘"
          className="w-[30px] h-[30px] mr-[10px]"
        />
        <input 
          type="text"
          placeholder="검색할 내용을 입력하세요."
          className="w-[300px] mb-[0px] font-bold text-xs focus:outline-none"
        />
      </div>
      <div className="flex gap-[10px] mb-[10px]">
        <div className="w-[70px] font-bold text-[15px] text-white bg-[#8449F5] rounded-lg text-center">일본</div>
        <div className="w-[260px] bg-[#8449F5] rounded-lg flex justify-center gap-[5px]">
          <img 
            src={process.env.PUBLIC_URL + "white_calendar.png"} 
            alt="하얀 달력"
            className="h-[13px] mt-[5px]"
          />
          <div className="font-bold text-[15px] text-white text-center">2023.07.20 ~ 2023.07.25</div>
        </div>
      </div>
      <hr />
      <div className="h-[469px] overflow-auto scroll-pr-[-20px]">
      {postDatas.map((postData, index) => {
        return <PostItem key={index} postData={postData} beforeRouter={"postItem"}/>
      })}
      <Ad />
      </div>
    </div>
  )
}

export default PostItems;