import React from "react";
import { useRecoilState } from "recoil";

import { tempState } from "../atoms";

function Post() {

  const [myData, setMyData] = useRecoilState(tempState);
  
  const dataHandler = () => {
    setMyData('abc')
  }

  return(
    <>
      <div>
        어아럼ㄴ이ㅏㄹㄴ이라ㅓㅁㄴㅇㄹ{myData}
      </div>
      <button onClick={dataHandler} className="bg-red-50 mt-6">
        버튼
      </button>
    </>
  )
}

export default Post