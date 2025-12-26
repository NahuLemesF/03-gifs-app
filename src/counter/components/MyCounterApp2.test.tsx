import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { MyCounterApp } from './MyCounterApp';

const handleAddMock = vi.fn();
const handleResetMock = vi.fn();
const handleSubtractMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
  useCounter: () => ({
    counter: 20,
    handleAdd: handleAddMock,
    handleReset: handleResetMock,
    handleSubtract: handleSubtractMock,
  }),
}));

describe('MyCounterApp', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render the component', () => {
    render(<MyCounterApp />);

    expect(screen.getByRole('heading', { name: 'Counter: 20' })).toBeDefined();
    expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
    expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
  });

  test('should handleAdd been called when boton is clicked', () => {
    render(<MyCounterApp />);

    const button = screen.getByRole('button', { name: '+1' });

    fireEvent.click(button);

    expect(handleAddMock).toHaveBeenCalled();
    expect(handleAddMock).toHaveBeenCalledTimes(1);
    expect(handleResetMock).not.toHaveBeenCalled();
    expect(handleSubtractMock).not.toHaveBeenCalled();
  });

  test('should handleSubtract been called when boton is clicked', () => {
    render(<MyCounterApp />);

    const subtractButton = screen.getByRole('button', { name: '-1' });

    fireEvent.click(subtractButton);

    expect(handleSubtractMock).toHaveBeenCalled();
    expect(handleSubtractMock).toHaveBeenCalledTimes(1);
    expect(handleResetMock).not.toHaveBeenCalled();
    expect(handleAddMock).not.toHaveBeenCalled();
  });
});
