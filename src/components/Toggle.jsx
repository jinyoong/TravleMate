import React from "react";
import { useRecoilState } from "recoil";
import { toggleState } from "../atoms";
import { useNavigate } from "react-router-dom";

function Toggle() {

  const [toggle, setToggle] = useRecoilState(toggleState);
  const navigate = useNavigate()

  function toggleButton(before) {
    if (toggle === "post" && before === "place") {
      setToggle("place");
    } else if (toggle === "place" && before === "post") {
      setToggle("post");
    }
  }

  return(
    <div className="h-[40px] flex justify-between mx-[10px]">
        <button 
          onClick={() => {
            toggleButton("post")
            navigate("/")
          }} 
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
          onClick={() => {
            toggleButton("place")
            navigate('/place')
          }} 
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