import remoteLoader from '../remoteLoader'
import Skeleton from './skeleton'

const remoteApp = import('@microfrontend-app/application-b')

export default remoteLoader({
  remoteApp,
  Skeleton,
})
