/* eslint-disable @typescript-eslint/no-unused-vars */
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React from 'react';
import Autocomplete, {
  usePlacesWidget,
} from 'react-google-autocomplete';
import { Input } from '@mui/material';

type CityProps = {
  lat: number;
  lng: number;
  setLng: (val: number) => void;
  setLat: (val: number) => void;
  timeZone: number;
  setTimeZone: (val: number) => void;
};

const CityAutoComplete: React.FC<CityProps> = ({
  setLat,
  setLng,
  lat,
  lng,
  setTimeZone,
}) => {
  axios
    .get(
      `https://api.wheretheiss.at/v1/coordinates/${lat},${lng}`
    )
    .then(function (response) {
      setTimeZone(response.data.offset);
    });
  const { ref: materialRef } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE,
    onPlaceSelected: (place) =>
      console.log(place),
    inputAutocompleteValue: 'country',
  });

  return (
    <div>
      <TextField
        required
        inputRef={materialRef}
        size="small"
        label="City"
        id="outlined-required"
      />
    </div>
  );
};

export default CityAutoComplete;
