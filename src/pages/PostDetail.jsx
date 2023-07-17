import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import PostDetailImg from "../components/PostDetailmg";
import PostDetailContent from "../components/PostDetailContent";
import PostModal from "../components/PostModal";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms";

function PostDetail() {
  const detailData = useLocation().state;

  const state = useRecoilValue(modalState);

  return(
    <>
      <Header />
      <PostDetailImg detailData={detailData}/>
      <PostDetailContent detailData={detailData} />
      {state ? <PostModal /> : <></>}
    </>
  )
}

export default PostDetail;