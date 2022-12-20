import applicationLoader from '../applicationLoader'

import Skeleton from './skeleton'

export default applicationLoader({
  importedComponent: import('@microfronted-app/application-a'),
  Skeleton,
})
