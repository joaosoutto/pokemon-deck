import React from 'react';
import { render } from '@testing-library/react';
import NoMatchs from '../components/NoMatchs/NoMatchs';

describe('Testing NoMatchs Component', () => {
  test('Testing render text', () => {
    const { getByText } = render(<NoMatchs />);

    const text = getByText('Nenhum resultado encontrado!');

    expect(text).toBeInTheDocument();
  });
});
