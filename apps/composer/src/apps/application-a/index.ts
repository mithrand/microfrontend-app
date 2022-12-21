import applicationLoader from '../applicationLoader'

import Skeleton from './skeleton'

// @ts-ignore
const remoteApp = import('applicationA/App')

export default applicationLoader({
  remoteApp,
  Skeleton,
})
