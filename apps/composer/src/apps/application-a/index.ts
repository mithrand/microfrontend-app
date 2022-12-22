import applicationLoader from '../applicationLoader'

import Skeleton from './skeleton'

const remoteApp = import('@microfronted-app/application-a')

export default applicationLoader({
  remoteApp,
  Skeleton,
})
