import { render, screen } from 'project-testing-library'
import { Home } from '.'

describe('<Home />', () => {
  it('should snapshot the Home page', () => {
    const { container } = render(<Home />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should if the title is rendering correctly', () => {
    render(<Home />)
    const title = screen.getByText('Home')
    expect(title).toBeInTheDocument()
  })
})
