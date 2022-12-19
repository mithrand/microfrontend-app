import React from 'react'
import { createBrowserRouter, redirect } from 'react-router-dom'
import Apps from './apps'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Apps.Main />,
  },
  {
    path: '/ApplicationA',
    element: <Apps.ApplicationA />,
  },
  {
    path: '/ApplicationB',
    element: <Apps.ApplicationB />,
  },
  {
    path: '/404',
    element: <Apps.NotFound />,
  },
  {
    path: '*',
    loader: () => redirect('/404'),
  },
])

export default router
