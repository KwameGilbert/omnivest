import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SuccessStories from '../SuccessStories';

test('opens modal when View Details clicked', () => {
  render(<SuccessStories />);
  const viewButtons = screen.getAllByText(/View Details/i);
  expect(viewButtons.length).toBeGreaterThan(0);
  fireEvent.click(viewButtons[0]);
  const close = screen.getByText(/Close/i);
  expect(close).toBeInTheDocument();
});
