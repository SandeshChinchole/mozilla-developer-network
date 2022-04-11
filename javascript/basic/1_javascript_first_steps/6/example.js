import { useEffect, useState } from 'react';
import { data } from './data';
const url = 'https://api.github.com/users';

const App = () => {
  const [person, setPerson] = useState({
    name: 'John Doe',
    age: 21,
    email: 'john@email.com',
    location: 'New York City',
    message: 'default message',
    occupation: 'Engineer',
  });

  const changeMessage = () => {
    const messageValue = '';
    if (person.message === 'default message') {
      messageValue = 'hello world';
    } else {
      messageValue = 'default message';
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
      <h4>{person.occupation}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default App;
