/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React from 'react';
import Autocomplete from "react-google-autocomplete";

type Props = {
    lat: number;
    lng: number;
    setLng: (val: number) => void;
    setLat: (val: number) => void;
    timeZone: number;
    setTimeZone: (val: number) => void;
  };
  

const CityAutoComplete: React.FC<Props> = ({setLat, setLng, lat, lng, timeZone, setTimeZone}) => {

axios
  .get(`https://api.wheretheiss.at/v1/coordinates/${lat},${lng}`)
  .then(function (response) {
    setTimeZone(response.data.offset);
  });

    return (
        <div>
            <Autocomplete
  apiKey={'AIzaSyDdnDgTYseTmr5yZWrpX1zHegS05NaT6JE'}
  onPlaceSelected={(place) => {
  if (place) {
    lng = place.geometry.location.lng();
    lat = place.geometry.location.lat();
  }

  setLat(lat)
  setLng(lng)
  }}
/>;
        </div>
    );
}

export default CityAutoComplete;