import React, { Suspense } from 'react'
import { Link } from '@microfrontend-app/ui-kit'

import AppSkeleton from './Skeleton'

const App = () => (
  <Suspense fallback={<AppSkeleton />}>
    <Link to="/"> Home </Link>
    <Link to="/ApplicationA"> Applicacion A</Link>
    <Link to="/ApplicationB"> Applicacion B</Link>
  </Suspense>
)

export default App
