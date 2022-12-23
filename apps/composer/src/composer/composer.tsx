import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { UiKitProvider } from '@microfrontend-app/ui-kit'

import router from '../router'

const Composer = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <UiKitProvider>
      <RouterProvider router={router} />
    </UiKitProvider>
  </Suspense>
)

export default Composer
