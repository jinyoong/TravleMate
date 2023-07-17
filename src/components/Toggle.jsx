import React from "react";
import { useRecoilState } from "recoil";
import { toggleState } from "../atoms";

function Toggle() {

  const [toggle, setToggle] = useRecoilState(toggleState);

  function toggleButton(before) {
    if (toggle === "post" && before === "place") {
      setToggle("place");
    } else if (toggle === "place" && before === "post") {
      setToggle("post");
    }
  }

  return(
    <div className="h-[40px] mx-[10px] mt-[10px] flex justify-between">
      <button 
        onClick={() => toggleButton("post")} 
        className={`
          w-[168px]
          rounded-t-lg
          border-solid
          border-t-[1.5px]
          border-l-[1.5px]
          border-r-[1.5px]
          border-[#8449F5]
          ${toggle === "post" ? "bg-[#8449F5]" : ""}
          ${toggle === "post" ? "text-white" : "text-black"}
          font-bold`}
      >
        Post
      </button>
      <button 
        onClick={() => toggleButton("place")} 
        className={`
          w-[168px]
          rounded-t-lg
          border-solid
          border-t-[1.5px]
          border-l-[1.5px]
          border-r-[1.5px]
          border-[#8449F5]
          ${toggle === "place" ? "bg-[#8449F5]" : ""}
          ${toggle === "place" ? "text-white" : "text-black"}
          font-bold`}
      >
        Place
      </button>
    </div>
  )
}

export default Toggle;