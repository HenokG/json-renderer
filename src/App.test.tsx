import { render, screen } from '@testing-library/react';
import App from './App';
import { mockData } from './__tests__/mockData';

test('renders learn react link', () => {
  render(<App src={mockData} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
