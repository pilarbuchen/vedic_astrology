import React, { useState } from 'react';
import UserData from '../models/forms';

interface FormSubmit {
    onSubmit: (data: UserData) => void;
  }

function Form({onSubmit}: FormSubmit) {

const [ userInput, setUserInput] = useState<UserData>({
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
    second: "",
    latitude: "",
    longitud: "",
    timezone: ""
});

const handleChange =(event: React.FormEvent) => {
    setUserInput({ ...userInput, [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value });
  };
  

const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(userInput);
    setUserInput({
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
        second: "",
        latitude: "",
        longitud: "",
        timezone: ""
    })
};

    return (
<form onSubmit={submitFormHandler}>
  <div className="form-group">
    <label>Years</label>
    <input   type='number' min={1000} max={9999}
    name="year" value={userInput.year} onChange={handleChange}
    className="form-control"></input>
  </div>
  <div className="form-group">
    <label>Month</label>
    <input type='number'min={1} max={12}
    name="month" value={userInput.month} onChange={handleChange}
    className="form-control"></input>
  </div>
  <div className="form-group">
    <label>Date</label>
    <input type='number'min={1} max={31}
    name="day" value={userInput.day} onChange={handleChange}
    className="form-control"></input>
  </div>
  <div className="form-group">
    <label>Hour</label>
    <input type='number' min={1} max={24}
    name="hour" value={userInput.hour} onChange={handleChange}
    className="form-control"></input>
  </div>
  <div className="form-group">
    <label>Minutes</label>
    <input type='number' min={0} max={60}
    name="minute" value={userInput.minute} onChange={handleChange}
    className="form-control" ></input>
  </div>
  <div className="form-group">
    <label>Seconds</label>
    <input type='number' min={0} max={60}
    name="second" value={userInput.second} onChange={handleChange}
    className="form-control" ></input>
  </div>
  <div className="form-group">
    <label>Longitude</label>
    <input name="longitud" value={userInput.longitud} onChange={handleChange}
    className="form-control" ></input>
  </div>
  <div className="form-group">
    <label>Latitude</label>
    <input name="latitude" value={userInput.latitude} onChange={handleChange}
    className="form-control" ></input>
  </div>
  <div className="form-group">
    <label>Timezone</label>
    <input name="timezone" value={userInput.timezone} onChange={handleChange}
    className="form-control" ></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    );
}

export default Form;