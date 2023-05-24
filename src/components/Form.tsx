import React, { useState } from 'react';
import CityAutoComplete from './CityAutoComplete';

interface FormSubmit {
    onSubmit: (data: {}) => void;
  }

function Form({onSubmit}: FormSubmit) {
const [lat,setLat] = useState<number>(0);
const [lng,setLng] = useState<number>(0);

let localLat = localStorage.getItem('lat')
let localLng = localStorage.getItem("lng")
const [ userInput, setUserInput] = useState({
    "year": 2022,
    "month": 8,
    "date": 11,
    "hours": 6,
    "minutes": 0,
    "seconds": 0,
    "latitude": localLat,
    "longitude": localLng,
    "timezone": 5.5,
    "settings": {
      "observation_point": "topocentric",
      "ayanamsha": "lahiri"
    }
  });

const handleChange =(event: React.FormEvent) => {
    setUserInput({ ...userInput, [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value });
  };

const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(setUserInput)
    const data = {
        year: userInput.year,
        month: userInput.month,
        date: userInput.date,
        hours: userInput.hours,
        minutes: userInput.minutes,
        seconds: userInput.seconds,
        latitude: localStorage.getItem('lat'),
        logitude: localStorage.getItem('lng'),
        timezone: userInput.timezone,
        settings: {
            observation_point: userInput.settings.observation_point,
            ayanamsha: userInput.settings.ayanamsha
        }
    }
    fetch('http://localhost:5000/api/form', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }).then(response => {
        response.json()
        .then(data => 
        console.log(data))
    })
    
};
console.log(lat, lng)
    return (
<form onSubmit={submitFormHandler}>
    <CityAutoComplete 
    lat={lat}
    lng={lng}
    setLat={setLat}
    setLng={setLng}
    />
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
    name="day" value={userInput.date} onChange={handleChange}
    className="form-control"></input>
  </div>
  <div className="form-group">
    <label>Hour</label>
    <input type='number' min={1} max={24}
    name="hour" value={userInput.hours} onChange={handleChange}
    className="form-control"></input>
  </div>
  <div className="form-group">
    <label>Minutes</label>
    <input type='number' min={0} max={60}
    name="minute" value={userInput.minutes} onChange={handleChange}
    className="form-control" ></input>
  </div>
  <div className="form-group">
    <label>Seconds</label>
    <input type='number' min={0} max={60}
    name="second" value={userInput.seconds} onChange={handleChange}
    className="form-control" ></input>
  </div>
  {/* <div className="form-group">
    <label>Longitude</label>
    <input name="longitud" value={userInput.longitude} onChange={handleChange}
    className="form-control" ></input>
  </div>
  <div className="form-group">
    <label>Latitude</label>
    <input name="latitude" value={userInput.latitude} onChange={handleChange}
    className="form-control" ></input>
  </div> */}
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