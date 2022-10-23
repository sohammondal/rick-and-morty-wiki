import React from 'react'
import { Outlet } from 'react-router-dom'

import { NavBar } from 'components/NavBar'

import { Characters } from './Characters'
import { Hero } from './Hero'

export const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Characters />
      </main>
      <Outlet />
    </>
  )
}
