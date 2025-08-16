import React from 'react';
import { render, screen } from '@testing-library/react';
import SuccessStories from '../SuccessStories';

test('renders Success Stories heading', () => {
  render(<SuccessStories />);
  const heading = screen.getByText(/Success Stories/i);
  expect(heading).toBeInTheDocument();
});
