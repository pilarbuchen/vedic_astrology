/* eslint-disable react-hooks/exhaustive-deps */
import './Form.css';
import React, {
  useState,
  useEffect,
} from 'react';
import CityAutoComplete from './CityAutoComplete';
import SignList from './ResultList';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import dataSVG from '../image/data';
import { Box, Grid } from '@mui/material';
import Datepicker from './datepicker/datepicker';
import Timepicker from './timepicker/timepicker';

interface FormSubmit {
  onSubmit: (data: {}) => void;
}

function Form({ onSubmit }: FormSubmit) {
  const [valueDate, setValueDate] = useState<{
    $M: number;
    $D: null | number;
    $y: null | number;
  } | null>({
    $M: 0,
    $y: 0,
    $D: 0,
  });
  const [fixed, setFixed] = useState(true);
  const [search, setSearch] = useState(false);
  const [signs, setSigns] = useState([
    {
      planets: '',
      signs: 0,
      id: 0,
      planetSVG: '',
    },
  ]);
  const [chart, setChart] = useState('');
  const [timeZone, setTimeZone] =
    useState<number>(0);
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [userInput, setUserInput] = useState({
    year: '',
    month: '',
    date: '',
    hours: '',
    minutes: '',
    seconds: '',
    settings: {
      observation_point: 'geocentric',
      ayanamsha: 'lahiri',
    },
  });

  const handleChange = (
    event: React.FormEvent
  ) => {
    setUserInput({
      ...userInput,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value,
    });
  };

  const data = {
    year: valueDate?.$y,
    month: valueDate!?.$M + 1,
    date: valueDate?.$D,
    hours: +userInput.hours,
    minutes: +userInput.minutes,
    seconds: +userInput.seconds,
    latitude: lat,
    longitude: lng,
    timezone: timeZone,
    settings: {
      observation_point:
        userInput.settings.observation_point,
      ayanamsha: userInput.settings.ayanamsha,
    },
  };

  const submitFormHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    onSubmit(setUserInput);
  };

  useEffect(() => {
    getAPI();
    getAPIChart();
  }, [search]);

  async function getAPI() {
    const response = await fetch(
      'http://localhost:5000/api/form',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error(
        'Network response was not OK'
      );
    } else {
      let userData = await response.json();

      let userPlanets = await userData
        ?.output?.[1];

      let keys: string[] = [];
      for (let key in userPlanets) {
        if (userPlanets.hasOwnProperty(key))
          keys.push(key);
      }
      let planetsArr: string[] = [];
      let signsArr: number[] = [];
      for (let i = 0; i < keys.length; i++) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let setArrs =
          (planetsArr.push(keys[i]),
          signsArr.push(
            userPlanets[keys[i]].current_sign
          ));
      }

      let arrListPlantsSigns: any = [];

      planetsArr.forEach(function (v, i) {
        let obj = {
          planets: '',
          signs: 0,
          id: Math.floor(Math.random() * 100),
          planetSVG: '',
        };
        obj.planets = v;
        obj.planetSVG = dataSVG[i];
        obj.signs = signsArr[i];
        arrListPlantsSigns.push(obj);
      });
      setSigns(arrListPlantsSigns);
    }
  }

  console.log(data);
  async function getAPIChart() {
    const response = await fetch(
      'http://localhost:5000/api/chart',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error(
        'Network response was not OK'
      );
    } else {
      let userDataChart = await response.json();
      setChart(userDataChart.output);
    }
  }
  return (
    <div
      style={{
        marginLeft: '30px',
        marginTop: '30px',
      }}>
      <Grid
        spacing={2}
        columns={16}
        container
        direction="row">
        <div>
          <Grid
            item
            xs={6}
            md={4}>
            <form onSubmit={submitFormHandler}>
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    m: 1,
                    width: '25ch',
                  },
                }}>
                <ThemeProvider
                  theme={createTheme({
                    typography: {
                      fontFamily: [
                        '-apple-system',
                        'BlinkMacSystemFont',
                        '"Segoe UI"',
                        'Roboto',
                        '"Helvetica Neue"',
                        'Arial',
                        'sans-serif',
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                      ].join(','),
                    },
                  })}>
                  <div>
                    <div>
                      <CityAutoComplete
                        timeZone={timeZone}
                        setTimeZone={setTimeZone}
                        lat={lat}
                        lng={lng}
                        setLat={setLat}
                        setLng={setLng}
                      />
                    </div>
                    <Datepicker
                      valueDate={valueDate}
                      setValueDate={setValueDate}
                    />
                    <Timepicker />
                    <div>
                      <TextField
                        required
                        size="small"
                        id="outlined-required"
                        name="hours"
                        label="Hours"
                        value={userInput.hours}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <TextField
                        required
                        size="small"
                        id="outlined-required"
                        name="minutes"
                        label="Minutes"
                        type="number"
                        value={userInput.minutes}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <TextField
                        required
                        size="small"
                        id="outlined-required"
                        name="seconds"
                        label="Seconds"
                        value={userInput.seconds}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="button-margin">
                    <Button
                      variant="outlined"
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => {
                        setSearch(!search);
                        setFixed(!fixed);
                      }}>
                      Submit
                    </Button>
                  </div>
                </ThemeProvider>
              </Box>
            </form>
          </Grid>
        </div>
        <div>
          <Grid
            item
            xs={6}
            md={12}>
            <SignList
              signs={signs}
              chart={chart}
              search={true}
              fixed={false}
            />
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default Form;
