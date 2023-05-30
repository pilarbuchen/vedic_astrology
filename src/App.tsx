import './App.css';
import Form from './components/Form';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Input } from "@mui/material";
import Button from '@mui/material/Button';

function App() {
  function submitFormHandler(data: {}): void {
    console.log(data);
  }

  return (
    <div className="App">
      <Form onSubmit={submitFormHandler} />
    </div>
  );
}

export default App;
