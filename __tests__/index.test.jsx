/** -- This is an example test, the comment below switches the test env to jsdom, redundant but shows as an example
 * @jest-environment jsdom
 */

// //Follow the import mock arange act assert convention

// // import
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { useAuth } from '../hooks/useAuth';

// https://polvara.me/posts/mocking-context-with-react-testing-library

describe('Placeholder', () => {
  it('is used to move forward development.', () => {});
});

// // setup mocks before tests, eg: you need a server running so you open a mock server

// jest.mock('../public/undraw-quiz.svg');

// jest.mock('../hooks/useAuth', () => {
//   return {
//     auth: jest.fn(),
//   };
// });

// describe('Home', () => {
//   it('renders a heading', () => {
//     // arrange
//     // act
//     // assert
//     // arrange - render components needed
//     render(<Home />);

//     // act upon those arranged objects
//     const heading = screen.getByRole('heading', {
//       name: /Welcome to spotMe!/,
//     });
//     // assert functionality, what should be happening?
//     expect(heading).toBeInTheDocument();
//   });
// });
