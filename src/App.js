import React from 'react';

import './App.css';

const app = () => {
  return (
    <div className='App'>
      <h1>Hello!!</h1>
      <input type='text' />
      <button>Add Todo</button>
      <ul>
        <li>Take dogs for a walk</li>
        <li>Who let the dogs out?</li>
      </ul>
    </div>
  );
};

export default app;
