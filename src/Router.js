import React from "react";
import { createBrowserRouter } from "react-router-dom"
import Place from "./pages/Place";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Post/>
  },
  {
    path: '/place',
    element: <Place/>
  },
  {
    path: '/post-detail',
    element: <PostDetail/>
  }
])

export default router;