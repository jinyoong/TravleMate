import React from "react";
import { createBrowserRouter } from "react-router-dom"
import Place from "./pages/Place";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Post/>
  },
  {
    path: '/place',
    element: <Place/>
  }
])

export default router;