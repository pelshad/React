import { render, screen } from '@testing-library/react';
import App from './components/Day6/Map1App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
