/*eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header component', () => {
  render(<Header />);
  const NewsNavItem = screen.getByText(/News/i);
  expect(NewsNavItem).toBeInTheDocument();

  const SportsNavItem = screen.getByText(/Sports/i);
  expect(SportsNavItem).toBeInTheDocument();

  const WeatherNavItem = screen.getByText(/Weather/i);
  expect(WeatherNavItem).toBeInTheDocument();

  const CatsNavItem = screen.getByText(/Cats/i);
  expect(CatsNavItem).toBeInTheDocument();
});
