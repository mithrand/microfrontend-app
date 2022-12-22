import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import router from '../router'

// ToDo: this way of importing is not scalable, need to find a better way for exporting components from a remote library
const UiKitProvider = React.lazy(() =>
  import('@microfrontend-app/ui-kit').then((module) => ({
    default: module.providers.uiKitProvider,
  })),
)

const Composer = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <UiKitProvider>
      <RouterProvider router={router} />
    </UiKitProvider>
  </Suspense>
)

export default Composer
