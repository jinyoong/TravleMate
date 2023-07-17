import React from "react";
import { createBrowserRouter } from "react-router-dom"
import Analytics from "./pages/Analytics";
import AnalyticsIng from "./pages/AnalyticsIng";
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
  },
  {
    path: '/analytics',
    element: <Analytics />
  },
  {
    path: '/analytics/ing',
    element: <AnalyticsIng />
  },
])

export default router;