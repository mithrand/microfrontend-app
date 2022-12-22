import applicationLoader from '../applicationLoader'
import Skeleton from './skeleton'

const remoteApp = import('@microfronted-app/application-b')

export default applicationLoader({
  remoteApp,
  Skeleton,
})
