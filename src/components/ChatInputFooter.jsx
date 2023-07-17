import React, {useState} from "react";

function ChatInputFooter() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };
  
  return (
    <div className="fixed bottom-0 w-full">
      <footer className="flex flex-row bg-slate-50 border-t border-slate-300 h-[74px]">
        <img src="Addcircle.svg" className="w-10 mx-2"/>
        <input 
        value={text}
        onChange={handleChange}
        type="text" 
        id="first_name" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block my-3.5 w-full p-3" 
        placeholder="Send a Message" />
        <img src="Send.svg" className="w-10 m-2" onClick={() => setText("")}/>
      </footer>
    </div>
  )
}

export default ChatInputFooter;