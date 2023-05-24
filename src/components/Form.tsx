import React, { useState, useEffect} from 'react';
import axios from 'axios'

interface FormSubmit {
    onSubmit: (data: {}) => void;
  }

function Form({onSubmit}: FormSubmit) {

const [ userInput, setUserInput] = useState({
    "year": 2022,
    "month": 8,
    "date": 11,
    "hours": 6,
    "minutes": 0,
    "seconds": 0,
    "latitude": 17.38333,
    "longitude": 78.4666,
    "timezone": 5.5,
    "settings": {
      "observation_point": "topocentric",
      "ayanamsha": "lahiri"
    }
  });

    // fetching the GET route from the Express server which matches the GET route from server.js

const handleChange =(event: React.FormEvent) => {
    setUserInput({ ...userInput, [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value });
  };

const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/form', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userInput)
    }).then(response => {
        response.json()
        .then(data => 
        console.log(data))
    })
    console.log('clicked')
    // onSubmit(userInput);
    // setUserInput({
    //     year: "",
    //     month: "",
    //     day: "",
    //     hour: "",
    //     minute: "",
    //     second: "",
    //     latitude: "",
    //     longitud: "",
    //     timezone: ""
    // })
//     await axios({
//         method: "post",
//         data : JSON.stringify(userInput),
//        })
//       .then((response) => {
//         console.log(response.data)
//       })
//       .catch(function (error) {
//         console.log(error);
//    });

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
  <div className="form-group">
    <label>Longitude</label>
    <input name="longitud" value={userInput.longitude} onChange={handleChange}
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