import React, { ComponentType, lazy, Suspense } from 'react'

const applicationLoader = ({
  remoteApp,
  Skeleton,
}: {
  remoteApp: Promise<{ default: ComponentType<any> }>
  Skeleton: () => JSX.Element
}) => {
  const Application = lazy(() => remoteApp)

  return () => (
    <Suspense fallback={<Skeleton />}>
      <Application />
    </Suspense>
  )
}

export default applicationLoader
