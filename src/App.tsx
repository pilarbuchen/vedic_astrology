import './App.css';
import Form from './components/Form';

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
