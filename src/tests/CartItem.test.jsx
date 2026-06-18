import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from '../components/CartItem/CartItem';

const mockItem = {
  id: 1,
  name: 'Test Product',
  price: 9.99,
  pic: 'https://example.com/img.jpg',
  quantity: 2,
};

describe('CartItem', () => {
  it('renders item info correctly', () => {
    render(<CartItem item={mockItem} updateQuantity={() => {}} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText(9.99)).toBeInTheDocument();
  });

  it('calls updateQuantity with decreased value when - is clicked', async () => {
    const user = userEvent.setup();
    const mockUpdate = vi.fn();
    render(<CartItem item={mockItem} updateQuantity={mockUpdate} />);
    await user.click(screen.getByText('-'));
    expect(mockUpdate).toHaveBeenCalledWith(1, 1);
  });

  it('calls updateQuantity with 0 when Remove is clicked', async () => {
    const user = userEvent.setup();
    const mockUpdate = vi.fn();
    render(<CartItem item={mockItem} updateQuantity={mockUpdate} />);
    await user.click(screen.getByText(/remove/i));
    expect(mockUpdate).toHaveBeenCalledWith(1, 0);
  });
});