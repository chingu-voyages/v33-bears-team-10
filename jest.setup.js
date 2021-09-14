// If you need to add more setup options before each test, add them to the jest.setup.js file below.

import '@testing-library/jest-dom/extend-expect';
import { Doughnut } from 'react-chartjs-2';

jest.mock('react-chartjs-2', () => ({
  Bar: () => null, // add any additional chart types here
  Line: () => null,
  Doughnut: () => null,
}));
