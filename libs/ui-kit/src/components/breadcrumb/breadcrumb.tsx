import React from 'react'
import { Link } from 'react-router-dom'
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbProps,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

interface Props extends BreadcrumbProps {
  links: { href: string; caption: string }[]
}

export const Breadcrumb = ({ links, ...props }: Props) => {
  ;<ChakraBreadcrumb {...props}>
    <BreadcrumbItem>
      {links.map(({ href, caption }) => (
        <BreadcrumbLink key={href} as={Link} to={href}>
          {caption}
        </BreadcrumbLink>
      ))}
    </BreadcrumbItem>
  </ChakraBreadcrumb>
}
