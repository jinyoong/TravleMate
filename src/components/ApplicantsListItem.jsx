import React, { useState } from "react";

function ApplicantsListItem({item}) {

  const [border, setBorder] = useState(false)

  function changeBorderEvent() {
    console.log(border)
    setBorder(!border);
  }

  return (
    <div onClick={() => changeBorderEvent()} className={`w-[330px] h-24 mx-auto my-[16px] rounded-xl shadow-[2px_4px_4px_1px_rgba(0,0,0,0.25)] flex ${border ? "border-purple-600 border-[3px]" : "border-[1px]"}`}>
      <img 
        src={item.user_image} 
        alt="프로필 사진"
        className="border-black w-[64px] rounded-[100px] h-[64px] my-auto mx-[20px] shadow-[2px_4px_4px_1px_rgba(0,0,0,0.25)]"
      />
      <div className="w-[200px] flex-col my-auto">
        <div className="flex items-center">
            <div className="mx-[5px] font-bold text-[16px]">
                {item.user_nickname}
            </div >
            <div className="mx-[5px]">
                {item.user_age}대
            </div>
            <div className="mx-[5px]">
                {item.user_sex === "M" ? <img src="./Male.png" className="w-[20px]"></img> : <img src="./Female.png" className="w-[20px]"></img>}
                
            </div>
        </div>
        <div className="flex">
            <div className="mx-[5px] bg-[#844BF5] text-white rounded-[3px] py-[1px] px-[5px] text-[10px]">{item.user_tag1}</div>
            <div className="mx-[5px] bg-[#844BF5] text-white rounded-[3px] py-[1px] px-[5px] text-[10px]">{item.user_tag2}</div>
            <div className="mx-[5px] bg-[#844BF5] text-white rounded-[3px] py-[1px] px-[5px] text-[10px]">{item.user_tag3}</div>
        </div>
      </div>
    </div>
  )
}

export default ApplicantsListItem;