import React from 'react';
import './App.css';
import Form from './components/Form';
import UserData from './models/forms';

function App() {
  
  function submitFormHandler(data: UserData): void {
    console.log(data);;
  }

  return (
    <div className="App">
      <Form onSubmit={submitFormHandler}/> 
    </div>
  );
}

export default App;
