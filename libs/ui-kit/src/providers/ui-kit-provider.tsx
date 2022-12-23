import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

type Props = {
  children: ReactNode
}

export const UiKitProvider: React.FC<Props> = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
)
