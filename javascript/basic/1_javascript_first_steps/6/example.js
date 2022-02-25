import { useEffect, useState } from 'react';
import { data } from './data';
const url = 'https://api.github.com/users';

const App = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 21,
    message: 'random message',
  });

  const changeMessage = () => {
    const messageValue = '';
    if (person.message === 'random message') {
      messageValue = 'new message';
    } else {
      messageValue = 'random message';
    }
    setPerson({ ...person, message: `${messageValue}` });
  };

  return (
    <>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default App;
