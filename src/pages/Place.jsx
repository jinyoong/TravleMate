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
      <div className="h-[552px] overflow-auto">

      {data.map((item, index) => (
        <Placecard userData={item}/>
      ))}
      </div>
      <Footer />
    </>
  )
}

export default Place
