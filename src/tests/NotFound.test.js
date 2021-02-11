import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../pages/NotFound/NotFound';

describe('Testing NotFound Page', () => {
  test('Testing render image', () => {
    const { getByAltText } = render(<NotFound />);

    const image = getByAltText('Pokemon Sleeping');

    expect(image).toBeInTheDocument();
  });

  test('Testing render text', () => {
    const { getByText } = render(<NotFound />);

    const text = getByText('Page not found');

    expect(text).toBeInTheDocument();
  });
});
