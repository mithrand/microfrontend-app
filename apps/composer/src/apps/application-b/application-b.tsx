import React, { lazy, Suspense } from 'react'
import Skeleton from './skeleton'

const ApplicationB = lazy(() => import('@microfrontend-app/application-b'))

export default () => (
  <Suspense fallback={<Skeleton />}>
    <ApplicationB />
  </Suspense>
)
