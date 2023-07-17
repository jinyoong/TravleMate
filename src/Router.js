import React from "react";
import { createBrowserRouter } from "react-router-dom"
import Place from "./pages/Place";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import Chat from "./pages/Chat";
import Move from "./pages/Move";


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
  },
  {
    path: '/chat',
    element: <Chat/>
  },
  {
    path: '/move',
    element: <Move/>
  }
])

export default router;