import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { applyModalState, statusModalState } from "../atoms";
import modalData from "../components/modalData";
import ApplicantsListItem from "./ApplicantsListItem";

function SecondModal() {

  const data = modalData;
  const [apply, setApply] = useRecoilState(applyModalState);
  const [status, setStatus] = useRecoilState(statusModalState);

  function clickEvent() {
    setApply(false);
    setStatus(false);
  }

  return (
    <>
      <div className="bg-[#000000] opacity-50 w-[360px] h-[740px] absolute top-0"></div>
      <div className="bg-white rounded-lg w-[340px] h-[450px] absolute top-[145px] left-[10px] flex flex-col gap-[20px] items-center justify-center">
        <div>
          {data.slice(0, 3).map(item => {
            return <ApplicantsListItem item={item}/>
          })}
        </div>
        <button 
          className="bg-gradient-to-r from-[#8449f5] to-[#6ad3cd] rounded-lg w-[320px] h-[30px] text-white font-bold"
          onClick={() => clickEvent()}
        >
            방 만들기
        </button>
      </div>
    </>
  )
}

export default SecondModal;