import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

//TODO: Test cases need to be regularly updated or implement a TDD approach
test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
