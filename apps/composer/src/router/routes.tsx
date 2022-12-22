import React from 'react'
import { redirect } from 'react-router-dom'

import Main from '../apps/main'
import NotFound from '../apps/not-found'
import ApplicationA from '../apps/application-a'
import ApplicationB from '../apps/application-b'
import Header from '../apps/header/header'
import Layout from '../layout/layout'

const routes = [
  {
    path: '/',
    element: <Layout header={[Header]} main={[Main]} />,
  },
  {
    path: '/ApplicationA',
    element: <Layout header={[Header]} main={[ApplicationA]} />,
  },
  {
    path: '/ApplicationB',
    element: <Layout header={[Header]} main={[ApplicationB]} />,
  },
  {
    path: '/404',
    element: <Layout header={[Header]} main={[NotFound]} />,
  },
  {
    path: '*',
    loader: () => redirect('/404'),
  },
]

export default routes
