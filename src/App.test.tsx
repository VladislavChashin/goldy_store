import React from 'react';
import { render, screen } from '@testing-library/react';
import {AppReg, AppSearch} from './App';

test('renders learn react link', () => {
  render(<AppReg />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
