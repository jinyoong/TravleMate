import React from "react";
import Placecard from "../components/Placecard";
import Toggle from "../components/Toggle"
import modalData from "../components/modalData";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Place() {

  const data = modalData

  return(
    <>
      <Header />
        <Toggle />
      <div className="mx-[20px] rounded-[10px] flex items-center mt-[10px]">
        <div className="text-white font-bold bg-[#844BF5] px-[4px] py-[1px] rounded-[10px] mr-[10px]">
          10km
        </div>
        <div className="text-white font-bold bg-[#844BF5] px-[4px] py-[1px] rounded-[10px]">
          남성
        </div>
      </div>
      <div className="h-[515px] overflow-auto">

      {data.map((item, index) => (
        <Placecard userData={item}/>
      ))}
      </div>
      <Footer />
    </>
  )
}

export default Place
