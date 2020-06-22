import React from 'react';
import './App.css';
import WithState from './WithState';

const counterBase = (props) => {
  const { counter, setCounter } = props;
  return (
    <>
      Count: {counter}
      <button onClick={() => setCounter((n) => n + 1)}>Increment</button>
      <button onClick={() => setCounter((n) => n - 1)}>Decrement</button>
    </>
  );
};

function App() {
  const enhance = WithState('counter', 'setCounter', 0);
  const Counter = enhance(counterBase);
  console.log(Counter);
  return (
    <div className='App'>
      <Counter></Counter>
    </div>
  );
}

export default App;
