import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row h-[74px] relative justify-between bottom-0">
      <div className="flex justify-center items-center rounded-tr-[10px] border-[#D9D9D9] border-t-2 w-[143px]">
        <img src="Chat.png" className="w-[24px]"></img>
      </div>
      <Link to="/">
        <div className="w-[74px] h-[74px] bg-gradient-to-b from-[#844BF5] to-[#6AD3CD] flex justify-center items-center rounded-[100px] fixed left-[39.5%] bottom-4 shadow-[2px_4px_4px_1px_rgba(0,0,0,0.25)]">
          <img src="Home.png" className="w-[30px]"></img>
        </div>
      </Link>
      {/* <Link> */}
        <div className="flex justify-center items-center rounded-tl-[10px] border-[#D9D9D9] border-t-2 w-[143px]"
          onClick={() => navigate('/mypage')}>
          <img src="Mypage.png" className="w-[24px]"></img>
        </div>
      {/* </Link> */}
    </div>
  )
}

export default Footer;