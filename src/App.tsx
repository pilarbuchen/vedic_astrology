/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import Form from './components/Form';
import Nav from './components/nav/nav';
import React from 'react';

function App() {
  function submitFormHandler(data: {}): void {
  }

  return (
    <div className="App">
      <Nav />
      <Form onSubmit={submitFormHandler} />
    </div>
  );
}

export default App;
