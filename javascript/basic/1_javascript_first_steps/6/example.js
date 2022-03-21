import { useEffect, useState } from 'react';
import { data } from './data';
const url = 'https://api.github.com/users';

const App = () => {
  const [person, setPerson] = useState({
    name: 'Austin',
    age: 21,
    email: 'austin@email.com',
    location: 'new york',
    message: 'goodbye world',
  });

  const changeMessage = () => {
    const messageValue = '';
    if (person.message === 'goodbye world') {
      messageValue = 'hello world';
    } else {
      messageValue = 'goodbye world';
    }
    setPerson({ ...person, message: `${messageValue}` });
  };

  return (
    <>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.email}</h4>
      <h4>{person.location}</h4>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default App;
