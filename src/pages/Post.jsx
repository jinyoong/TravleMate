import React from "react";
import Header from "../components/Header";
import PostItems from "../components/PostItems";
import Footer from "../components/Footer";
import Toggle from "../components/Toggle";

function Post() {

  return(
    <>
      <Header />
      <Toggle />
      <PostItems />
      <Footer />
    </>
  )
}

export default Post