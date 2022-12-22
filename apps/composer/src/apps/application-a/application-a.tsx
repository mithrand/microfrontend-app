import React, { lazy, Suspense } from 'react'
import Skeleton from './skeleton'

const ApplicationA = lazy(() => import('@microfrontend-app/application-a'))

export default () => (
  <Suspense fallback={<Skeleton />}>
    <ApplicationA />
  </Suspense>
)
