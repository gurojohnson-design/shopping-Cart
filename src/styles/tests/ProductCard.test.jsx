import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '../components/ProductCard/ProductCard';

const mockProduct = {
  id: 1,
  name: 'Test Product',
  price: 9.99,
  pic: 'https://example.com/img.jpg',
  description: 'A test product',
};

describe('ProductCard', () => {
  it('renders product info correctly', () => {
    render(<ProductCard {...mockProduct} addToCart={() => {}} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText(9.99)).toBeInTheDocument();
  });

  it('increments quantity when + is clicked', async () => {
    const user = userEvent.setup();
    render(<ProductCard {...mockProduct} addToCart={() => {}} />);
    const input = screen.getByRole('spinbutton');
    await user.click(screen.getByText('+'));
    expect(input.value).toBe('1');
  });

  it('calls addToCart with correct args when Add to Cart is clicked', async () => {
    const user = userEvent.setup();
    const mockAddToCart = vi.fn();
    render(<ProductCard {...mockProduct} addToCart={mockAddToCart} />);
    await user.click(screen.getByText('+'));
    await user.click(screen.getByText(/add to cart/i));
    expect(mockAddToCart).toHaveBeenCalledWith(1, 1, {
      name: 'Test Product',
      price: 9.99,
      pic: 'https://example.com/img.jpg',
    });
  });
});