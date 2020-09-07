import React from 'react';
import './App.scss';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header name="outinlimbo"/>
      <Body name="About Me"/>
      <Footer name="Contact Me"/>
    </div>
  );
}

export default App;
