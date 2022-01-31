import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const handleReset = () => setValue(0);

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h1>regular counter</h1>
        <h2>{value}</h2>
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick={handleReset}>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
