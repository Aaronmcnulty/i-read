import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('App', () => {
  it('renders headline', () => {
    render(<Header title="I read" />);

    screen.debug();

    // check if App components renders headline
  });
});