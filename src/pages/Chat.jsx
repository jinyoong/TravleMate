import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ChatInputFooter from "../components/ChatInputFooter";

const ChatBubble = ({ text, isMe, name}) => {

  const nickname = isMe ? "" : name ;
  const bubbleClassName = isMe ? 
  'float-right bg-[#EBE1FF] rounded-l-lg rounded-tr-lg' 
  : 'float-left bg-[#E4E4E4] rounded-r-lg rounded-tl-lg';
  
  return (
    <>
        {nickname}
      <div className="justify-self-start">
        <div className={`p-2 max-w-xs mb-2 ${bubbleClassName}`}>
          {text}
        </div>
      </div>
    </>
  );
};

function Chat() {
  const messages = [
    { text: '안녕하세요!', isMe: false, name:"mark" },
    { text: '안녕하세요!', isMe: true, name:"me" },
    { text: '오늘 날씨가 참 좋네요.', isMe: false, name:"mark" },
    { text: '날씨가 좋네요.', isMe: true, name:"me" },
    { text: '저도 반갑습니다!', isMe: false, name:"Tony" },
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const currentMessage = messages[currentMessageIndex];

  const [displayedMessages, setDisplayedMessages] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === '1') {
        setDisplayedMessages((prevMessages) => {
          const nextIndex = prevMessages.length + 1;
          if (nextIndex <= messages.length) {
            return [...prevMessages, messages[nextIndex - 1]];
          }
          return prevMessages;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);



  return(
    <>
      <Header/>
      {/* <div className="flex flex-col p-3">
        {messages.map((message, index) => (
          <ChatBubble className="flex flex-col" key={index} text={message.text} isMe={message.isMe} name={message.name}/>
        ))}
      </div> */}
      <div className="flex flex-col p-3">
      {displayedMessages.map((message, index) => (
        <div key={index}>
          <ChatBubble className="flex flex-col" text={message.text} isMe={message.isMe} name={message.name}/>
        </div>
      ))}


    </div>
      <ChatInputFooter/>
    </>
  )
}
export default Chat


