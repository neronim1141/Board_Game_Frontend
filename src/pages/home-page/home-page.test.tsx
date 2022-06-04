import * as React from 'react';

import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/test/test.utils';
import { HomePage } from './home-page';

describe('HomePage', () => {
  test('should render', async () => {
    renderWithRouter(<HomePage />);
    await screen.findByText('0.1.0');
  });
});
