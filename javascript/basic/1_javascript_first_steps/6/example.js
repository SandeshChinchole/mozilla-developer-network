import React, { useEffect, useState } from 'react';

// 1. filter employees from /data/employees.json to only display bankers
// 2. sort bankers by satisfationRating

const BankEmployee = (props) => {
  const bankerFilter = props.user.type === 'banker';

  return (
    <div>
      {bankerFilter && (
        <div className='bank-employee'>
          <h1>{props.children}</h1>
          <span>{props.user.userName}</span>
          <br />
          <span>Name: {props.user.name}</span>
          <br />
          <span>
            Customer Satisfaction Rating: {props.user.satisfactionRating}
          </span>
        </div>
      )}
    </div>
  );
};
export default React.memo(BankEmployee);
