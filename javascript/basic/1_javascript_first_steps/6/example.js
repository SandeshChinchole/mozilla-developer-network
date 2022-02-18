import React from 'react';
// import './styles/styles.css';
import logo from './images/usb-logo.svg';
import data from './data/employees.json';
import Customer from './components/Customer';
import BankEmployee from './components/BankEmployee';

export default function App() {
  return (
    <>
      <div className='logo-container'>
        <img src={logo} alt='U.S Bank logo' />
      </div>
      <div>
        {/* Add and debug Customer component */}
        <h1>Customer</h1>
        <Customer userName='x1234' name='Firstname Lastname' />
        {/* Add filtered bank employees do display only bankers */}
        <h1>Employees</h1>
        {data.map((user) => {
          return <BankEmployee key={user.id} user={user} />;
        })}
      </div>
      <div>
        <p>&copy; 2021 U.S.Bank</p>
      </div>
    </>
  );
}
