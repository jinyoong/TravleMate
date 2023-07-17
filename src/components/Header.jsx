import React from "react";

function Header() {
  return (
    <header className="flex flex-row bg-black h-[74px]">
      <img 
        src={process.env.PUBLIC_URL + "/arrow.png"} 
        alt="화살표"
        className="w-[20px] h-[20px]"
      />
      <div className="font-bold">TravleMate</div>
    </header>
  )
}

export default Header;