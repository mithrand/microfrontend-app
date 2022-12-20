import React, { lazy, Suspense, ComponentType } from 'react'

const applicationLoader = ({
  importedComponent,
  Skeleton,
}: {
  importedComponent: Promise<{ default: ComponentType<any> }>
  Skeleton: () => JSX.Element
}) => {
  const Application = lazy(() => importedComponent)

  return () => (
    <Suspense fallback={<Skeleton />}>
      <Application />
    </Suspense>
  )
}

export default applicationLoader
