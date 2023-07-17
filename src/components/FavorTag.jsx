import React, {useState} from "react";

function FavorTag({favorItem}) {

    const [clicked, setClicked] = useState(false)

    return(
        <>
            {clicked ? 
            <div className="mx-[5px] my-[10px]">
                <div className="bg-[#844BF5] text-white rounded-[3px] px-[10px] py-[3px] text-[24px] shadow-[2px_4px_4px_1px_rgba(0,0,0,0.25)]" onClick={() => setClicked(false)}>
                    {favorItem}
                </div>
            </div>:
            <div className="mx-[5px] my-[10px]">
                <div className="border-[1px] border-[#844BF5] text-[#844BF5] rounded-[3px] px-[10px] py-[3px] text-[24px] shadow-[2px_4px_4px_1px_rgba(0,0,0,0.25)]" onClick={() => setClicked(true)}>
                    {favorItem}
                </div>
            </div>

            }
        </>
    )
}

export default FavorTag