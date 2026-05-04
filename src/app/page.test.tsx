import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('coming soon page', () => {
  it('renders the site identity', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /Physical Investor/i })).toBeInTheDocument()
    expect(screen.getByText('physicalinvestor.com')).toBeInTheDocument()
  })
})
