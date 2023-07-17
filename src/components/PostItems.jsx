import React from "react";
import { postDatas } from "./datas";
import Toggle from "./Toggle";
import PostItem from "./PostItem";

function PostItems() {

  return (
    <div className="w-[340px] h-[596px] ml-[10px] mt-[10px]">
      <Toggle />
      <input 
        type="text"
        placeholder="검색할 내용을 입력하세요."
        className="w-[300px] border-1"
      />
      <div className="flex gap-[10px]">
        <div className="w-[70px]">괌</div>
        {/* <img 
          src={process.env.PUBLIC_URL + "/calendar.png"} 
          alt="캘린더 이미지"
          className="w-[20px]"
        /> */}
        <div className="w-[260px]">2023.07.20 ~ 2023.07.25</div>
      </div>
      <hr />
      {postDatas.map((postData, index) => {
        return <PostItem key={index} postData={postData}/>
      })}
    </div>
  )
}

export default PostItems;