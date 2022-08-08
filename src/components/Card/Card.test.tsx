import { render, screen } from '@testing-library/react';
import { TEST_DEFAULT_VALUES_CITY } from '../../constants/cities';
import Card from './Card';

it('renders "Welcome to Your Fluent UI App"', () => {
  render(<Card city={TEST_DEFAULT_VALUES_CITY}/>);
  const linkElement = screen.getByText(/Welcome to Your Fluent UI App/i);
  expect(linkElement).toBeInTheDocument();
});
