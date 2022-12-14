import React from 'react';
import './style.css';
import RefsDemo from './components/RefsDemo';
import GetInput from './components/GetInput';
import GetInputHook from './components/GetInputHook';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';

export default function App() {
  return (
    <div>
      <RefsDemo />
      <GetInput />
      <GetInputHook />
      <PortalDemo />
      <ErrorBoundry>
        <Hero heroName="Broker" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Droker" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Joker" />
      </ErrorBoundry>
    </div>
  );
}
