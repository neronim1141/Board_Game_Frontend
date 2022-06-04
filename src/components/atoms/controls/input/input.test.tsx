import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('should render', () => {
    render(<Input />);
    expect(screen.getByPlaceholderText('Type here...')).toBeInTheDocument();
  });

  it('should have default value', () => {
    render(<Input defaultValue="text" />);
    expect(screen.getByRole('textbox')).toHaveValue('text');
  });
  it('should have be able to set type', () => {
    render(<Input type="number" />);
    expect(screen.getByPlaceholderText('Type here...')).toHaveAttribute('type', 'number');
  });

  it('should should have placeholder', () => {
    render(<Input placeholder="placeholder" />);
    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument();
  });

  it('should should be disabled', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByRole('textbox')).toHaveClass('input-text--disabled input-border--disabled');
  });

  it('should should be invalid', () => {
    render(<Input invalid />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('textbox')).toHaveClass('input-text--invalid input-border--invalid');
  });

  it('should call on change', async () => {
    const callback = vi.fn();
    render(<Input onChange={callback} />);
    expect(screen.getByRole('textbox')).toHaveValue('');

    await userEvent.type(screen.getByRole('textbox'), 'type');

    expect(callback).toHaveBeenCalledTimes(4);
    expect(screen.getByRole('textbox')).toHaveValue('type');
  });
});
