import { describe, expect, test } from 'vitest';
import { useCounter } from './useCounter';
import { act, renderHook } from '@testing-library/react';

describe('useCounter', () => {
  test('should initialize with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(0);
  });

  test('should initialize with custom initial value', () => {
    const { result } = renderHook(() => useCounter(10));

    expect(result.current.counter).toBe(10);
  });

  test('should increment counter when handleAdd is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(1);
  });

  test('should decrement counter when handleSubtract is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(-1);
  });

  test('should reset counter when handleReset is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(1);

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(0);
  });
});
