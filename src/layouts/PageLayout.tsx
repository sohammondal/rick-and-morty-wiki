import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from 'components/Footer'
import { NavBar } from 'components/NavBar'

export const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <main>{children}</main>
      <Footer />
      <Outlet />
    </React.Fragment>
  )
}
