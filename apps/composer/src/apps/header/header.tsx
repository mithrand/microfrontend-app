import React, { lazy, Suspense } from 'react'
import Skeleton from './skeleton'

const Header = lazy(() => import('@microfrontend-app/header'))

export default () => (
  <Suspense fallback={<Skeleton />}>
    <Header />
  </Suspense>
)
