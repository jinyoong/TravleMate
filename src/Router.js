import React from "react";
import { createBrowserRouter } from "react-router-dom"
import Place from "./pages/Place";
import Post from "./pages/Post";
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
    path: '/chat',
    element: <Chat/>
  },
  {
    path: '/move',
    element: <Move/>
  }
])

export default router;