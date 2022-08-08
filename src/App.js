import React from 'react';
import './style.css';
import RefsDemo from './components/RefsDemo';
import GetInput from './components/GetInput';
import GetInputHook from './components/GetInputHook';

export default function App() {
  return (
    <div>
      <RefsDemo />
      <GetInput />
      <GetInputHook />
    </div>
  );
}
