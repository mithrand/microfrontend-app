import remoteLoader from '../remoteLoader'

import Skeleton from './skeleton'

const remoteApp = import('@microfrontend-app/application-a')

export default remoteLoader({
  remoteApp,
  Skeleton,
})
