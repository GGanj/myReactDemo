import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

test('renders homepage', () => {
  render(<Homepage />);
  const linkElement = screen.getByText(/Context/i);
  console.log(linkElement);
  expect(linkElement).toBeInTheDocument();
});
