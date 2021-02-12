import React from 'react';
import { render } from '@testing-library/react';
import NoDecks from '../components/NoDecks/NoDecks';

describe('Testing NoDecks Component', () => {
  test('Testing render image', () => {
    const { getByAltText } = render(<NoDecks />);

    const image = getByAltText('Snorlax sleeping');

    expect(image).toBeInTheDocument();
  });

  test('Testing render text', () => {
    const { getByText } = render(<NoDecks />);

    const text = getByText('Você ainda não possui nenhum deck');

    expect(text).toBeInTheDocument();
  });
});
