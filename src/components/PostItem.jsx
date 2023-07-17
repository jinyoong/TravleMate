import React from "react";
import { useNavigate } from "react-router-dom";

function PostItem({postData, beforeRouter}) {
  const navigate = useNavigate();

  return(
    <div 
      className="border-solid border-[1.5px] border-gray-200 rounded-[15px] drop-shadow-md flex mt-[10px] p-[5px] h-[90px]"
      onClick={() => {
        navigate("/post-detail", {
          state: [postData, beforeRouter],
        })
      }}
    >
      <img 
        src={postData.img}
        alt="여행지 사진"
        className="w-[80px] h-[80px] rounded-full"
      />
      <div className="flex flex-col justify-center ml-[15px] w-[235px]">
        <div className="text-purple-700 font-bold text-xs flex gap-[3px]">
          <img 
            src={process.env.PUBLIC_URL + "/Vector.png"}
            alt="장소 아이콘"
            className="w-[8px] h-[10px] mt-[2px]"
          />
          <span>{postData["target"]}</span>
        </div>
        <div className="font-bold text-xs">{postData["title"]}</div>
        <div className="text-[10px] h-[15px] whitespace-nowrap overflow-hidden text-ellipsis">{postData["content"]}</div>
        <div className="flex gap-14 mt-[5px]">
          <div className="flex gap-[5px]">
            <img 
              src={process.env.PUBLIC_URL + "calendar.png"}
              alt="달력"
              className="h-[8px] mt-[3px]"
            />
            <span className="text-[8px] text-[#9A9A9A]">{postData["date"]}</span>
          </div>
          <div className="flex gap-[5px]">
            <img 
              src={process.env.PUBLIC_URL + "people.png"}
              alt="인원"
              className="h-[8px] mt-[3px]"
            />
            <span className="text-[#8449F5] font-bold text-[8px]">{postData["cnt"]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem;