import { screen, fireEvent } from '@testing-library/react'
import { mockIntersectionObserver } from 'jsdom-testing-mocks'
import React from 'react'

import { render } from 'utils/test'

import App from './App'

mockIntersectionObserver()
jest.mock('rickmortyapi')

beforeEach(() => {
  render(<App />)
})

describe('Test App component', () => {
  it('renders The Rick and Morty Wiki heading', async () => {
    const h1Elem = screen.getByText(/The Rick and Morty Wiki/i)
    expect(h1Elem).toBeInTheDocument()
  })

  it('initially renders with 20 character cards', async () => {
    const cards = await screen.findAllByTestId('character-card')
    expect(cards).toHaveLength(1)
  })

  it('opens modal when a character card is clicked', async () => {
    const button = await screen.findByRole('button')
    fireEvent.click(button)
    expect(screen.getByTestId('character-modal')).toBeVisible()
  })
})
