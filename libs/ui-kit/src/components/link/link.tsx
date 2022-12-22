import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

interface Props extends LinkProps {
  to: string
}

export const Link = (props: Props) => (
  <ChakraLink color="teal.500" as={ReactRouterLink} {...props} />
)
