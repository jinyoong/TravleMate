import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms";

function PostModal() {

  const [state, setState] = useRecoilState(modalState);

  return (
    <>
      <div className="bg-[#000000] opacity-50 w-[360px] h-[740px] absolute top-0"></div>
      <div className="bg-white rounded-lg w-[300px] h-[100px] absolute top-[320px] left-[30px] flex flex-col gap-[20px] items-center justify-center">
        <div className="font-bold text-lg">신청이 완료되었습니다.</div>
        <button 
          className="bg-gradient-to-r from-[#8449f5] to-[#6ad3cd] rounded-lg w-[120px] h-[30px] text-white font-bold"
          onClick={() => setState(!state)}
        >
            나가기
        </button>
      </div>
    </>
  )
}

export default PostModal;