import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import QuizHero from '../components/sections/QuizHero';

jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);

describe('QuizHero', () => {
  it('renders the QuizSVG', async () => {
    // arrange
    render(<QuizHero />);

    // act
    const image = await waitFor(() => screen.findByAltText('QuizImage'));

    // console.log(image);
    // assert
    expect(image).toBeInTheDocument();
  });
});
