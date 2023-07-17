import React from "react";
import { useState} from 'react'
import Modal from 'react-modal'

function Placecard() {

    const [modalIsOpen, setIsModalOpen] = useState(false);


    return(
        <div className="w-[330px] h-24 mx-auto my-[16px] rounded-xl border-[1px] shadow-[2px_4px_4px_1px_rgba(0,0,0,0.25)] flex">
            <div className="border-black w-[64px] rounded-[100px] h-[64px] my-auto mx-[20px] shadow-[2px_4px_4px_1px_rgba(0,0,0,0.25)]"></div>
            <div className="w-[200px] flex-col my-auto">
                <div className="flex items-center">
                    <div className="mx-[5px] font-bold text-[20px]">
                        닉네임
                    </div >
                    <div className="mx-[5px]">
                        27세
                    </div>
                    <div className="mx-[5px]">
                        <img src="./Male.png" className="w-[20px]"></img>
                    </div>
                </div>
                <div className="flex">
                    <div className="mx-[5px] bg-[#844BF5] text-white rounded-[3px] py-[1px] px-[5px] text-[10px]">FLEX</div>
                    <div className="mx-[5px] bg-[#844BF5] text-white rounded-[3px] py-[1px] px-[5px] text-[10px]">활동적인</div>
                    <div className="mx-[5px] bg-[#844BF5] text-white rounded-[3px] py-[1px] px-[5px] text-[10px]">계획적인</div>
                </div>
                <div className="mx-[5px] text-[16px]" onClick={() => {
                    setIsModalOpen(true)
                    console.log('어')
                }}>11km</div>
            </div>
            <Modal isOpen={modalIsOpen} className="h-[520px] w-[330px] mx-auto px-[20px] border-white my-[100px] opacity-100 bg-white rounded-[10px] shadow-[2px_4px_4px_1px_rgba(0,0,0,0.25)]" onRequestClose={() => setIsModalOpen(false)}>
                <button onClick={() => setIsModalOpen(false)} className="ml-[280px] text-[20px] font-bold">
                    X
                </button>
                <div className="flex">
                    <div className="border-black w-[64px] rounded-[100px] h-[64px] my-auto mr-[24px] shadow-[2px_4px_4px_1px_rgba(0,0,0,0.25)]"></div>
                    <div className="w-[200px] flex-col my-auto">
                        <div className="flex items-center">
                            <div className="mx-[5px] font-bold text-[20px]">
                                닉네임
                            </div >
                            <div className="mx-[5px]">
                                27세
                            </div>
                            <div className="mx-[5px]">
                                <img src="./Male.png" className="w-[20px]"></img>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mx-[5px] bg-[#844BF5] text-white rounded-[3px] py-[1px] px-[5px] text-[10px] shadow-[2px_4px_4px_1px_rgba(0,0,0,0.25)]">FLEX</div>
                            <div className="mx-[5px] bg-[#844BF5] text-white rounded-[3px] py-[1px] px-[5px] text-[10px] shadow-[2px_4px_4px_1px_rgba(0,0,0,0.25)]">활동적인</div>
                            <div className="mx-[5px] bg-[#844BF5] text-white rounded-[3px] py-[1px] px-[5px] text-[10px] shadow-[2px_4px_4px_1px_rgba(0,0,0,0.25)]">계획적인</div>
                        </div>
                        <div className="mx-[5px] text-[16px] font-bold" onClick={() => {
                            setIsModalOpen(true)
                            console.log('어')
                        }}>@hana_financial</div>
                    </div>
                </div>
                <div className="mx-[10px]">
                    <div className="mt-[20px] mb-[8px] font-bold">
                        자기소개
                    </div>
                    <div>
                    안녕하세요 저는 익스트림 스포츠를 좋아합니다. 같이 여행 가실 분을 찾고 있습니다. 게획적인 여행을 선호하고 해외 여행이 처음이라 같이 가실 분을 구해요.
                    </div>
                    <hr className="my-[20px]"></hr>
                    <div className="font-bold">
                        여행계획
                    </div>
                    <div>
                        <div className="flex justify-center items-center">
                            <img src="US.png" className="w-[40px] h-[30px] mr-[10px] my-[10px]"></img>
                            <div>2023. 07. 03 ~ 2023. 07. 28</div>
                        </div>
                    </div>
                </div>

                <div className="w-[290px] h-[50px] mt-[24px] bg-gradient-to-r from-[#844BF5] to-[#6AD3CD] rounded-[10px] justify-center items-center font-bold text-white text-[18px] flex">
                    <img src="Bubble.png" className="w-[20px] h-[20px] mr-[10px]"></img>
                    <div className="self-center">
                    채팅하기
                    </div>
                </div>
                <div className="flex justify-center items-center my-[10px]">
                    <img src="Siren.png" className="w-[16px] h-[16px]"></img>
                    <div className="text-[#D9D9D9] text-[14px]">신고하기</div>
                </div>
            </Modal>
        </div>
    )
}

export default Placecard
