import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { UiKitProvider } from '@microfrontend-app/ui-kit'

import router from '../router'
import { useServices } from '../services'

const Composer = () => {
  useServices()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UiKitProvider>
        <RouterProvider router={router} />
      </UiKitProvider>
    </Suspense>
  )
}

export default Composer
