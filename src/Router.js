import React from "react";
import { createBrowserRouter } from "react-router-dom"
import Analytics from "./pages/Analytics";
import AnalyticsIng from "./pages/AnalyticsIng";
import Place from "./pages/Place";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import Chat from "./pages/Chat";
import Move from "./pages/Move";
import MyPage from "./pages/MyPage";


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
  },
  {
    path: '/analytics',
    element: <Analytics />
  },
  {
    path: '/analytics/ing',
    element: <AnalyticsIng />
  },
  {
    path: '/mypage',
    element: <MyPage />
  }
])

export default router;