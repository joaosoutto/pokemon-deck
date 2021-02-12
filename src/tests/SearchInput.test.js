import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from '../components/SearchInput/SearchInput';

describe('Testing SearchInput Component', () => {
  test('Testing search input render', () => {
    const { getByRole } = render(<SearchInput />);

    const input = getByRole('search');
    expect(input).toBeInTheDocument();
  });

  test('Testing search input placeHolder', () => {
    const { getByPlaceholderText, rerender } = render(<SearchInput />);

    const placeHolder = 'Test';

    rerender(<SearchInput placeHolder={placeHolder} />);
    expect(getByPlaceholderText(placeHolder)).toBeInTheDocument();
  });
});
