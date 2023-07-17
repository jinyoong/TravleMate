import React from "react";
import Placecard from "../components/Placecard";
import Toggle from "../components/Toggle"
import modalData from "../components/modalData";

function Place() {

  const data = modalData

  return(
    <>
      <Toggle />
      <div className="mx-[20px] rounded-[10px] flex items-center mt-[10px]">
        <div className="text-white font-bold bg-[#844BF5] px-[4px] py-[1px] rounded-[10px] mr-[10px]">
          10km
        </div>
        <div className="text-white font-bold bg-[#844BF5] px-[4px] py-[1px] rounded-[10px]">
          남성
        </div>
      </div>
      {data.map((item, index) => (
        <Placecard userData={item}/>
      ))}
    </>
  )
}

export default Place
