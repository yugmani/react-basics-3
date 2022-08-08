import React, { useState } from 'react';

const GetInputHook = () => {
  const [name, setName] = useState('');

  const handleInput = (event) => {
    setName({ name: event.target.value });
  };

  const logValue = () => {
    console.log(name);
  };

  return (
    <div>
      <h2>Get Input Value using Hooks</h2>
      <h3>
        My name is <span className="title-name">{event.target.value}</span>
      </h3>
      <input type="text" onChange={handleInput} />
      <button onClick={logValue}>Click</button>
    </div>
  );
};

export default GetInputHook;