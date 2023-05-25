/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Autocomplete from "react-google-autocomplete";

type Props = {
    lat: number;
    lng: number;
    setLng: (val: number) => void;
    setLat: (val: number) => void;
  };
  

const CityAutoComplete: React.FC<Props> = ({setLat, setLng, lat, lng}) => {

    console.log(lat, lng)
    return (
        <div>
            <Autocomplete
  apiKey={'AIzaSyDdnDgTYseTmr5yZWrpX1zHegS05NaT6JE'}
  onPlaceSelected={(place) => {
    console.log(place);
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