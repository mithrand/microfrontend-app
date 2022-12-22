import remoteLoader from '../remoteLoader'
import Skeleton from './skeleton'

const remoteApp = import('@microfronted-app/application-b')

export default remoteLoader({
  remoteApp,
  Skeleton,
})
