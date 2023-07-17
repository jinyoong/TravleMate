import React from "react";
import { useRecoilState } from "recoil";
import { paidModalState } from "../atoms";


const PayMan = ({img, name, amount}) => {
  return (
    <>
      <div className="flex justify-between mx-10 my-3">
        <img src={img} alt="" className="w-5" />
        <div>{name}</div>
        <div>{amount} \</div>
      </div>
    </>
  )
}

function PaidModal() {
  const payData = [
    {img : "https://i.namu.wiki/i/hvxKPzx-v6vuwDNUqbTcxdSVxzrM3QJM_T8t5JHVJOAyIoCIXZWwe5orpOvclWvFbWnsScPS9Htr-MB26qWspAkGqgvmfCniL99I_xPDLsq5TW5HRXi2bL4BfHiGfHIn1nBAkgojl2nSiRz5Kv-XcA.webp", name: "푸바오귀여오", amount : 2500},
    {img : "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80", name: "푸바오귀여워", amount : 2500},
    {img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60", name: "여행덕후", amount : 2500},
    {img : "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60", name: "여행조하", amount : 2500},
  ];

  const [state, setState] = useRecoilState(paidModalState);

  return (
    <>
      <div className="bg-[#000000] opacity-50 w-[360px] h-[740px] absolute top-0"></div>
      <div className="bg-white rounded-lg w-[300px] h-[350px] absolute top-[140px] left-[30px] gap-[10px] items-center justify-center">
        <div className="justify-self-start p-4">
          <div className="font-bold text-lg text-left">정산 하기</div>
          <div className="font-bold text-3xl text-left">10000 \</div>
        </div>

          {payData.map((data, index) => (
            <PayMan 
            key={index}
            img = {data.img}
            name = {data.name}
            amount = {data.amount}
            />
          ))}
        <div className="flex flex-cols gap-5 m-5">
          <button 
            className="bg-slate-300 rounded-lg w-[120px] h-[30px] text-white font-bold"
            onClick={() => setState(!state)}
            >
              취소
          </button>
          <button 
            className="bg-gradient-to-r from-[#8449f5] to-[#6ad3cd] rounded-lg w-[120px] h-[30px] text-white font-bold"
            onClick={() => setState(!state)}
            >
              정산하기
          </button>
        </div>
      </div>
    </>
  )
}

export default PaidModal;