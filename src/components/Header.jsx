import React from "react";
import { useNavigate } from "react-router";

function Header() {

  const navigate = useNavigate();

  return (
    <header className="flex flex-row h-[74px] mx-[20px] justify-between items-center">
      <img 
        src={process.env.PUBLIC_URL + "/arrow.png"} 
        alt="화살표"
        className="w-[20px] h-[20px]"
        onClick={() => navigate(-1)}
      />
      {/* <div className="font-bold text-[24px]">TravelMate</div> */}
      <div className="flex justify-center">
            <img src="TravelMate.png" className="w-[200px] text-center"></img>

            </div>
      <div className="w-[20px] h-[10px] bg-white"></div>
    </header>
  )
}

export default Header;