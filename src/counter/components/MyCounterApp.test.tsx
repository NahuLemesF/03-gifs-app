import { describe, expect, test } from 'vitest';
import { MyCounterApp } from './MyCounterApp';
import { fireEvent, render, screen } from '@testing-library/react';

describe('MyCounterApp', () => {
  test('should render the component with default values', () => {
    render(<MyCounterApp />);

    expect(screen.getByRole('heading', { name: 'Counter: 0' })).toBeDefined();
    expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
    expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
  });

  test('should increment the counter', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button', { name: '+1' });

    fireEvent.click(button);

    expect(labelH1.textContent).toContain('Counter: 1');
  });

  test('should decrement the counter', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button', { name: '-1' });

    fireEvent.click(button);

    expect(labelH1.textContent).toContain('Counter: -1');
  });

  test('should reset the counter', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole('heading', { level: 1 });
    const addButton = screen.getByRole('button', { name: '+1' });
    const resetButton = screen.getByRole('button', { name: 'Reset' });

    fireEvent.click(addButton);
    fireEvent.click(resetButton);

    expect(labelH1.textContent).toContain('Counter: 0');
  });
});
