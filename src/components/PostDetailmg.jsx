import React from "react";

function PostDetailImg({detailData}) {
  return(
    <div className="relative">
      <img
        src={detailData.img}
        alt="배경 이미지"
        className="w-[360px] h-[210px]"
      />
      <div className="w-[120px] h-[30px] bg-white opacity-60 absolute top-[7px] right-[14px] rounded-lg drop-shadow-lg "></div>
      <div className="w-[120px] h-[30px] absolute top-[7px] right-[14px] flex justify-center gap-[5px]">
        <img
          src={process.env.PUBLIC_URL + "/Vector.png"}
          alt="마커"
          className="w-[16px] h-[21px] mt-[4px]"
        />
        <div className="opacity-100 text-[#8449F5] font-bold text-[17px] mt-[3px]">{detailData.target}</div>
      </div>
    </div>
  )
}

export default PostDetailImg;