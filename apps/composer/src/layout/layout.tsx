import React from 'react'

type LayoutProps = {
  header?: Array<() => JSX.Element>
  nav?: Array<() => JSX.Element>
  sidebar?: Array<() => JSX.Element>
  main?: Array<() => JSX.Element>
  footer?: Array<() => JSX.Element>
}

const HeaderContent = React.memo(({ header }: Pick<LayoutProps, 'header'>) => (
  <header>
    {header?.map((Component) => (
      <Component key={Component.name} />
    ))}
  </header>
))

const NavContent = React.memo(({ nav }: Pick<LayoutProps, 'nav'>) => (
  <nav>
    {nav?.map((Component) => (
      <Component key={Component.name} />
    ))}
  </nav>
))

const SidebarContent = React.memo(
  ({ sidebar }: Pick<LayoutProps, 'sidebar'>) => (
    <aside>
      {sidebar?.map((Component) => (
        <Component key={Component.name} />
      ))}
    </aside>
  ),
)

const MainContent = React.memo(({ main }: Pick<LayoutProps, 'main'>) => (
  <main>
    {main?.map((Component) => (
      <Component key={Component.name} />
    ))}
  </main>
))

const FooterContent = React.memo(({ footer }: Pick<LayoutProps, 'footer'>) => (
  <footer>
    {footer?.map((Component) => (
      <Component key={Component.name} />
    ))}
  </footer>
))

const Layout: React.FC<LayoutProps> = ({
  header,
  nav,
  sidebar,
  main,
  footer,
}) => (
  <>
    <HeaderContent header={header} />
    <NavContent nav={nav} />
    <SidebarContent sidebar={sidebar} />
    <MainContent main={main} />
    <FooterContent footer={footer} />
  </>
)

Layout.defaultProps = {
  header: [],
  nav: [],
  main: [],
  sidebar: [],
  footer: [],
}
export default Layout
