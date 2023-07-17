import React from "react";

function PostItem({postData}) {
  return(
    <div 
      className="border-solid border-[1.5px] border-gray-200 rounded-[15px] drop-shadow-md flex mt-[10px] p-[5px] h-[90px]"
      onClick={() => alert(postData["title"])}
    >
      <img 
        src={postData.img}
        alt="여행지 사진"
        className="w-[80px] h-[80px] rounded-full"
      />
      <div className="flex flex-col justify-center ml-[15px] w-[235px]">
        <div className="text-purple-700 font-bold text-xs">{postData["target"]}</div>
        <div className="font-bold text-xs">{postData["title"]}</div>
        <div className="text-[10px]">{postData["content"]}</div>
        <div className="flex gap-14 mt-[5px]">
          <span className="text-[8px]">{postData["date"]}</span>
          <span className="text-purple-700 font-bold text-[8px]">{postData["cnt"]}</span>
        </div>
      </div>
    </div>
  )
}

export default PostItem;