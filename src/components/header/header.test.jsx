import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Header from './Header';

describe('App', () => {
  it('renders headline', () => {
    render(<Header title="I read" />);

    screen.debug();
  });
});