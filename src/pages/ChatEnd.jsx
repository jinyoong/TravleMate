import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ChatInputFooter from "../components/ChatInputFooter";
import PaidModal from "../components/PaidModal";
import { useRecoilValue } from "recoil";
import { paidModalState } from "../atoms";

const ChatBubble = ({ text, isMe, name}) => {

  const nickname = isMe ? "" : name ;
  const bubbleClassName = isMe ? 
  'float-right bg-[#EBE1FF] rounded-l-lg rounded-tr-lg' 
  : 'float-left bg-[#E4E4E4] rounded-r-lg rounded-tl-lg';
  const messageLines = text.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <>
        {nickname}
      <div className="justify-self-start">
        <div className={`p-2 max-w-xs mb-2 ${bubbleClassName}`}>
          {messageLines}
        </div>
      </div>
    </>
  );
};

function ChatEnd() {
  const messages = [
    { text: '즐거웠습니다!', isMe: false, name:"푸바오귀여워" },
    { text: '저도 재밌었습니다!', isMe: false, name:"여행조하" },
    { text: '정산해요!!', isMe: false, name:"여행덕후" },
    { text: `정산 요청입니다.
    ------------------
    대상 금액: 10000원
    나 : 2500원
    푸바오귀여워 : 2500원
    여행조하 : 2500원
    여행덕후 : 2500원`, isMe: true, name:"Me" },
  ];
  const state = useRecoilValue(paidModalState);
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
      <div className="flex flex-col p-3">
      {displayedMessages.map((message, index) => (
        <div key={index}>
          <ChatBubble className="flex flex-col" text={message.text} isMe={message.isMe} name={message.name}/>
        </div>
      ))}
    </div>
      <ChatInputFooter/>
      {state ? <PaidModal /> : <></>}
    </>
  )
}
export default ChatEnd


