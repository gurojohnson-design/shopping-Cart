import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar cartCount={0} />
      </MemoryRouter>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/shop/i)).toBeInTheDocument();
  });

  it('displays the correct cart count', () => {
    render(
      <MemoryRouter>
        <Navbar cartCount={5} />
      </MemoryRouter>
    );
    expect(screen.getByText(/5/)).toBeInTheDocument();
  });
});