import React from 'react'
import { redirect } from 'react-router-dom'

import Apps from '../apps'
import Layout from '../layout/layout'

const routes = [
  {
    path: '/',
    element: <Layout main={[Apps.Main]} />,
  },
  {
    path: '/ApplicationA',
    element: <Layout main={[Apps.ApplicationA]} />,
  },
  {
    path: '/ApplicationB',
    element: <Layout main={[Apps.ApplicationB]} />,
  },
  {
    path: '/404',
    element: <Layout main={[Apps.NotFound]} />,
  },
  {
    path: '*',
    loader: () => redirect('/404'),
  },
]

export default routes
