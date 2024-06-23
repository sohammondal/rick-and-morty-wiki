import React from 'react'

import { PageLayout } from 'layouts/PageLayout'

import { Characters } from './Characters'
import { Hero } from './Hero'

export const Home: React.FC = () => {
  return (
    <PageLayout>
      <Hero />
      <Characters />
    </PageLayout>
  )
}
