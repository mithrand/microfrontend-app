import React, { Suspense } from 'react'
import AppSkeleton from './Skeleton'

// ToDo: this way of importing is not scalable, need to find a better way for exporting components from a remote library
const Link = React.lazy(() =>
  import('@microfrontend-app/ui-kit').then((module) => ({
    default: module.components.Link,
  })),
)

const App = () => (
  <Suspense fallback={<AppSkeleton />}>
    <Link to="/"> Home </Link>
    <Link to="/ApplicationA"> Applicacion A</Link>
    <Link to="/ApplicationB"> Applicacion B</Link>
  </Suspense>
)

export default App
