import { useCounter } from '../hooks/useCounter';

export const MyCounterApp = () => {
  const { counter, handleAdd, handleReset, handleSubtract } = useCounter();

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Counter: {counter}</h1>
      <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <button
          onClick={handleAdd}
          style={{
            padding: '8px 14px',
            backgroundColor: '#22c55e',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
          }}
        >
          +1
        </button>

        <button
          onClick={handleReset}
          style={{
            padding: '8px 14px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
          }}
        >
          Reset
        </button>

        <button
          onClick={handleSubtract}
          style={{
            padding: '8px 14px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
          }}
        >
          -1
        </button>
      </div>
    </div>
  );
};
