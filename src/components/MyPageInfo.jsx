import React from "react";
import { myPageData } from "./datas";
import PostItem from "./PostItem";

function MyPageInfo() {

  return (
    <div className="w-[340px] ml-[10px]">
      <div className="flex gap-[40px]">
        <img 
          src={myPageData.profile}
          alt="프로필"
          className="w-[80px] h-[80px] rounded-full"
        />
        <div className="flex flex-col gap-[6px]">
          <div className="flex gap-[9px] font-bold text-[16px]">
            <span>{myPageData.name}</span>
            <span>{myPageData.age}세</span>
            <img 
              src={process.env.PUBLIC_URL + (myPageData.gender === "m" ? "Male.png" : "Female.png")}
              alt="성별 아이콘"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="flex gap-[8px]">
            {myPageData.ch.map((element, index) => {
              return <span key={`${element}-${index}`} className="w-[50px] h-[20px] text-white text-center text-[12px] mt-[2px] bg-[#8449F5] rounded-lg">{element}</span>
            })}
          </div>
          <div className="text-[14px] font-bold">{myPageData.sns}</div>
        </div>
      </div>
      <div className="my-[15px] font-bold text-[14px]">자기소개</div>
      <div className="h-[100px] overflow-auto">{myPageData.intro}</div>
      <hr className="my-[10px]"/>
      <div className="h-[400px] overflow-auto">
        <div className="my-[15px] font-bold text-[14px]">여행기간</div>
        <div className="flex flex-col gap-[5px]">
          {myPageData.tl.map((element, index) => {
            return <div key={index} className="flex gap-[50px] justify-center items-center border-solid border-[1.5px] border-gray-200 rounded-[5px] drop-shadow-md h-[40px]">
              <img src={element[0]} alt="국기" className="w-[40px] h-[30px] rounded-sm"/>
              <div>{element[1]}</div>
            </div>
          })}
        </div>
        <hr className="my-[10px]"/>
        <div className="my-[15px] font-bold text-[14px]">내 글 목록</div>
        <div>
          {myPageData.ls.map((element, index) => {
            return <div key={index}>
              <PostItem postData={element} beforeRouter={"mypage"}/>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default MyPageInfo;