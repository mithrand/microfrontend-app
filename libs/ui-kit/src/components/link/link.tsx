import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

export const Link = (props: LinkProps) => (
  <ChakraLink as={ReactRouterLink} {...props} />
)
