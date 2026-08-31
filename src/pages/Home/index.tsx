import React from 'react'

import { PageLayout } from 'layouts/PageLayout'

import { Characters } from './Characters'

export const Home: React.FC = () => {
  return (
    <PageLayout>
      <Characters />
    </PageLayout>
  )
}
