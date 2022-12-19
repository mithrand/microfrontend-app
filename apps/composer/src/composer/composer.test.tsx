import React from 'react'
import { render, screen } from '@testing-library/react'

import Composer from './composer'

describe('Composer App test', () => {
  it('Render the application', () => {
    render(<Composer />)
    expect(screen.getByText(/Main/i)).toBeInTheDocument()
  })
})
