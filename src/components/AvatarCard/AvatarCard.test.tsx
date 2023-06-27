import { render, screen } from '@testing-library/react'
import AvatarCard from './AvatarCard'

test('renders AvatarCard', () => {
  const {container} = render(<AvatarCard  cardName='card name' imgUrl='imgUrl' url='url' />)
  const cardName = screen.getByText('card name')
  expect(cardName).toBeInTheDocument()
  expect(container).toMatchSnapshot()
  expect(cardName.closest('a')).toHaveAttribute('href', 'url')
})
