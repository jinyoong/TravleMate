import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { paidModalState } from "../atoms";

function ChatInputFooter() {
  const [text, setText] = useState("");
  const [buttonState, setButtonState] = useState(false); 
  const [state, setState] = useRecoilState(paidModalState);

  const handleModalState = () => {
    setState(!state);
  }

  const handleChange = (event) => {
    setText(event.target.value);
  };
  
  return (
    <div className="fixed bottom-0 w-full bg-slate-50">
      <footer className="flex flex-row border-t border-slate-300 h-[74px]">
        <img src={buttonState ? "Closecircle.svg" : "Addcircle.svg" } className="w-10 mx-2" onClick={() => setButtonState((prev) => !prev)}/>
        <input 
        value={text}
        onChange={handleChange}
        type="text" 
        id="first_name" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block my-3.5 w-full p-3" 
        placeholder="Send a Message" />
        <img src="Send.svg" className="w-10 m-2" onClick={() => setText("")}/>
      </footer>
      {buttonState ? 
      <>
      <div className="mx-3 mb-3 flex justify-evenly">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 bg-gradient-to-r from-[#8449f5] to-[#6ad3cd] font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 " 
        onClick={() => {
          handleModalState()}}>
          <img src="money_send.svg" className="w-8 m-2" />
        </button>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 bg-gradient-to-r from-[#8449f5] to-[#6ad3cd] font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 ">
          <img src="chat_list.svg" className="w-8 m-2"/>
        </button>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 bg-gradient-to-r from-[#8449f5] to-[#6ad3cd] font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 ">
          <img src="chat_exit.svg" className="w-8 m-2"/>
        </button>
      </div>
      </>
      :
      <></>
      }

    </div>
  )
}

export default ChatInputFooter;