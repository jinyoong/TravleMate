import React from "react";
import Placecard from "../components/Placecard";
import Toggle from "../components/Toggle"

function Place() {
  return(
    <>
      <div className="mx-[10px]">
        <Toggle />
      </div>
      <div className="mx-[20px] rounded-[10px] flex items-center mt-[10px]">
        <div className="text-white font-bold bg-gradient-to-r from-[#844BF5] to-[#6AD3CD] px-[4px] py-[1px] rounded-[10px] mr-[10px]">
          10km
        </div>
        <div className="text-white font-bold bg-gradient-to-r from-[#844BF5] to-[#6AD3CD] px-[4px] py-[1px] rounded-[10px]">
          남성
        </div>
      </div>
      <Placecard/>
      <Placecard/>
      <Placecard/>
      <Placecard/>
      <Placecard/>
      <Placecard/>
      <Placecard/>
      <Placecard/>
    </>
  )
}

export default Place
