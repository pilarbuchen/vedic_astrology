import React from 'react';
import './App.css';
import Form from './components/Form';
import SignList from './components/ResultList';

function App() {

  function submitFormHandler(data: {}): void {
   console.log(data)
  }

  return (
    <div className="App">
      <Form onSubmit={submitFormHandler}/> 
    </div>
  );
}

export default App;
