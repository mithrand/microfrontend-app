import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './app'

describe('Composer App test', () => {
  it('Render the application', () => {
    render(<App />)
    expect(screen.getByText(/App/i)).toBeInTheDocument()
  })
})
