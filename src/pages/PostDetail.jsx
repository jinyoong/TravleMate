import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import PostDetailImg from "../components/PostDetailmg";
import PostDetailContent from "../components/PostDetailContent";
import PostModal from "../components/PostModal";
import { useRecoilValue } from "recoil";
import { applyModalState } from "../atoms";
import { statusModalState } from "../atoms";
import SecondModal from "../components/SecondModal";

function PostDetail() {
  const detailData = useLocation().state[0];
  const beforeRouter = useLocation().state[1];

  const apply = useRecoilValue(applyModalState);
  const status = useRecoilValue(statusModalState);
  console.log(useLocation());

  return(
    <>
      <Header />
      <PostDetailImg detailData={detailData}/>
      <PostDetailContent detailData={detailData} beforeRouter={beforeRouter}/>
      {apply ? <PostModal /> : <></>}
      {status ? <SecondModal /> : <></>}
    </>
  )
}

export default PostDetail;