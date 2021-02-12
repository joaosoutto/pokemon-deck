import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../components/Loading/Loading';

describe('Testing Loading Component', () => {
  test('Testing render image', () => {
    const { getByAltText } = render(<Loading />);

    const image = getByAltText('Gif');

    expect(image).toBeInTheDocument();
  });

  test('Testing render text', () => {
    const { getByText } = render(<Loading />);

    const text = getByText('Carregando cards...');

    expect(text).toBeInTheDocument();
  });
});
