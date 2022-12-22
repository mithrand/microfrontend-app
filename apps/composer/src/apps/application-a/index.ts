import remoteLoader from '../remoteLoader'

import Skeleton from './skeleton'

const remoteApp = import('@microfronted-app/application-a')

export default remoteLoader({
  remoteApp,
  Skeleton,
})
