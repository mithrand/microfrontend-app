import applicationLoader from '../applicationLoader'
import Skeleton from './skeleton'

// @ts-ignore
const remoteApp = import('applicationB/App')

export default applicationLoader({
  remoteApp,
  Skeleton,
})
